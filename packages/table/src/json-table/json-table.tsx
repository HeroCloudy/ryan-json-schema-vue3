import type { OfItem } from '@ryan-json-schema-vue3/utils'
import type { PageInfo, RowBtn } from '../common/types'
import type { VxeGridProps, VxeGridPropTypes, VxePagerEvents, VxeTableDefines } from 'vxe-table'
import { computed, defineComponent, ref } from 'vue'
import XEUtils from 'xe-utils'
import { VxeGrid } from 'vxe-table'
import { UI_OPTIONS, UI_WIDTH } from '@ryan-json-schema-vue3/utils'
import { basicTableProps } from '../common/props'
import { renderBtnItem } from './render/row-btn-render'

import './style.scss'
import { byteLength } from '../common/utils'

const NAME = 'ry-json-table'

const OPT_NAME = 'InnerOptColumn'

const JsonTable = defineComponent({
  name: NAME,
  props: basicTableProps,
  setup(props, context) {
    const gridOptions = computed<VxeGridProps>(() => ({
      align: 'center',
      columnConfig: {
        resizable: true
      },
      loading: props.tableLoading
    }))

    const rowConfig = computed(() => {
      return {
        isHover: true,
        useKey: true,
        keyField: props.rowKey || '_X_ROW_KEY'
      }
    })

    const xTableRef = ref()

    const getXTableRef = () => {
      return xTableRef.value
    }

    context.expose({
      getXTableRef
    })

    const handlePageChange: VxePagerEvents.PageChange = (data: PageInfo) => {
      if (props.pageInfo) {
        const { pageInfo } = props
        pageInfo.currentPage = data.currentPage
        pageInfo.pageSize = data.pageSize
      }
      context.emit('page-change', data)
    }

    const innerPageInfo = computed(() => ({ ...props.pageInfo }))

    const renderPager = () => {
      return (
        <vxe-pager
          layouts={[
            'Total',
            'Sizes',
            // 'PrevJump',
            'PrevPage',
            'JumpNumber',
            'NextPage',
            // 'NextJump',
            'FullJump'
            // 'Number',
            // 'PageCount'
          ]}
          v-model:current-page={innerPageInfo.value.currentPage}
          v-model:page-size={innerPageInfo.value.pageSize}
          total={innerPageInfo.value.total}
          onPageChange={handlePageChange}
        ></vxe-pager>
      )
    }

    const columns = computed(() => {
      const { schema, uiSchema, showIndex, selectionType } = props
      const ret: VxeGridPropTypes.Columns = []

      if (selectionType === 'checkbox') {
        ret.push({
          type: 'checkbox',
          width: 50,
          fixed: 'left'
        })
      }

      if (showIndex) {
        ret.push({
          type: 'seq',
          width: 50,
          fixed: 'left',
          align: 'center',
          title: '序号'
        })
      }

      const dateFormatter = ({ cellValue }: { cellValue: any }): string => {
        return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:mm:ss')
      }

      Object.keys(schema.properties).forEach((k) => {
        const item = schema.properties[k]
        item.prop = item.prop || k

        const uiItem = uiSchema[k] || {}
        const uiOptions = uiItem[UI_OPTIONS] || {}

        const target: VxeTableDefines.ColumnOptions = {
          field: item.prop,
          title: item.description || item.prop,
          headerAlign: 'center',
          align: 'center',
          showOverflow: true,
          ...uiOptions
        }
        if (uiItem[UI_WIDTH]) {
          target.width = uiItem[UI_WIDTH]
        } else if (props.columnWidth === 'auto') {
          if (uiOptions.minWidth && uiOptions.minWidth !== 'auto') {
            target.minWidth = uiOptions.minWidth
          } else if (item.description) {
            let defaultMinWidth = byteLength(item.description!) * 20
            if (defaultMinWidth < 100) {
              defaultMinWidth = 100
            }
            target.minWidth = defaultMinWidth < 100 ? 100 : defaultMinWidth
          }
        }
        if (props.columnWidth) {
          if (k.includes('Time') || k.includes('Date')) {
            target.width = 200
          } else {
            target.width = props.columnWidth
          }
        }

        // slots
        if (context.slots[k]) {
          target.slots = {
            default: k
          }
        }

        if (item.format) {
          switch (item.format) {
            case 'date-time':
              target.formatter = dateFormatter
              break
          }
        }

        // formatter
        if (uiOptions.formatter && typeof uiOptions.formatter === 'function') {
          target.formatter = uiOptions.formatter
        } else if (item.oneOf) {
          target.formatter = ({ cellValue }) => {
            const val = item.oneOf!.find(
              (item: OfItem<string | number | boolean>) => item.const === cellValue
            )
            return val?.title || cellValue
          }
        } else if (item.anyOf) {
          target.formatter = ({ cellValue }) => {
            let value: string[] = []
            if (typeof cellValue === 'string') {
              value = cellValue.split(',')
            } else {
              value = cellValue as string[]
            }
            return value
              .map((v) => {
                const val = item.anyOf!.find(
                  (item: OfItem<string | number | boolean>) => item.const === v
                )
                return val?.title || v
              })
              .join(',')
          }
        }

        ret.push(target)
      })

      const { rowBtnList } = props

      if (rowBtnList !== null) {
        ret.push({
          width: props.optWidth,
          fixed: 'right',
          align: 'center',
          title: '操作',
          slots: { default: OPT_NAME }
        })
      }

      return ret
    })

    const renderOpt = ({ row }: any) => {
      const { rowBtnList } = props
      let innerRowBtnList: RowBtn[] = []

      if (typeof rowBtnList === 'function') {
        innerRowBtnList = rowBtnList(row)
      } else {
        innerRowBtnList = rowBtnList
      }

      const rowBtnClick = (key: string) => {
        context.emit('row-btn-click', key, row)
      }

      return innerRowBtnList.map((item: RowBtn) => renderBtnItem(item, rowBtnClick))
    }

    // const selectedItems = ref<Record<string, any>[]>([])

    const onCheckboxChange = () => {
      if (xTableRef.value) {
        context.emit('row-selected', xTableRef.value.getCheckboxRecords())
      }
    }

    const slots = {
      ...context.slots,
      [OPT_NAME]: renderOpt,
      pager: props.showPager ? renderPager : null
    }

    const innerData = computed(() => props.model || [])

    return () => (
      <div class={NAME}>
        <VxeGrid
          {...context.attrs}
          ref={xTableRef}
          {...gridOptions.value}
          columns={columns.value}
          data={innerData.value}
          height="auto"
          v-slots={slots}
          rowConfig={rowConfig.value}
          onCheckboxChange={onCheckboxChange}
          onCheckboxAll={onCheckboxChange}
        ></VxeGrid>
      </div>
    )
  }
})

export default JsonTable
