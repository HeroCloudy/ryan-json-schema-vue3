import type { App } from 'vue';
import { BasicSchemaProp } from '@ryan-json-schema-vue3/utils';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { Schema } from '@ryan-json-schema-vue3/utils';
import type { SetupContext } from 'vue';
import { UiSchema } from '@ryan-json-schema-vue3/utils';

export declare interface BasicTableProp extends BasicSchemaProp {
    model: Record<string, any>[];
    showPager?: boolean;
    showIndex?: boolean;
    selectionType?: 'checkbox' | '';
    pageInfo?: PageInfo;
    optWidth?: string;
    tableLoading?: boolean;
    rowBtnList?: (row: Record<string, any>) => RowBtn[];
    rowKey?: string;
}

export declare const basicTableProps: {
    readonly model: {
        readonly type: PropType<Record<string, any>[]>;
        readonly required: true;
    };
    readonly showPager: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: true;
    };
    readonly showIndex: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: false;
    };
    readonly selectionType: {
        readonly type: PropType<"" | "checkbox">;
        readonly required: false;
        readonly default: "";
    };
    readonly pageInfo: {
        readonly type: PropType<PageInfo>;
        readonly required: false;
        readonly default: () => {
            currentPage: number;
            pageSize: number;
            total: number;
        };
    };
    readonly rowBtnList: {
        readonly type: PropType<(row: Record<string, any>) => RowBtn[]>;
        readonly required: false;
        readonly default: null;
    };
    readonly tableLoading: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: false;
    };
    readonly optWidth: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "150";
    };
    readonly rowKey: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "_X_ROW_KEY";
    };
    readonly schema: {
        readonly type: PropType<Schema>;
        readonly required: true;
    };
    readonly uiSchema: {
        readonly type: PropType<UiSchema>;
        readonly required: false;
        readonly default: () => {};
    };
};

export declare const bindEvent: (context: SetupContext) => {
    onRowBtnClick: (key: string, row: any) => void;
    onRowSelected: (rows: Record<string, any>[]) => void;
    onPageChange: (pageInfo: PageInfo) => void;
};

export declare type BtnType = '' | 'default' | 'success' | 'warning' | 'info' | 'text' | 'primary' | 'danger';

declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;

export declare const install: (app: App) => void;

export declare const JsonTable: DefineComponent<{
    readonly model: {
        readonly type: PropType<Record<string, any>[]>;
        readonly required: true;
    };
    readonly showPager: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: true;
    };
    readonly showIndex: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: false;
    };
    readonly selectionType: {
        readonly type: PropType<"" | "checkbox">;
        readonly required: false;
        readonly default: "";
    };
    readonly pageInfo: {
        readonly type: PropType<PageInfo>;
        readonly required: false;
        readonly default: () => {
            currentPage: number;
            pageSize: number;
            total: number;
        };
    };
    readonly rowBtnList: {
        readonly type: PropType<(row: Record<string, any>) => RowBtn[]>;
        readonly required: false;
        readonly default: null;
    };
    readonly tableLoading: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: false;
    };
    readonly optWidth: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "150";
    };
    readonly rowKey: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "_X_ROW_KEY";
    };
    readonly schema: {
        readonly type: PropType<Schema>;
        readonly required: true;
    };
    readonly uiSchema: {
        readonly type: PropType<UiSchema>;
        readonly required: false;
        readonly default: () => {};
    };
}, () => any, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{
    readonly model: {
        readonly type: PropType<Record<string, any>[]>;
        readonly required: true;
    };
    readonly showPager: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: true;
    };
    readonly showIndex: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: false;
    };
    readonly selectionType: {
        readonly type: PropType<"" | "checkbox">;
        readonly required: false;
        readonly default: "";
    };
    readonly pageInfo: {
        readonly type: PropType<PageInfo>;
        readonly required: false;
        readonly default: () => {
            currentPage: number;
            pageSize: number;
            total: number;
        };
    };
    readonly rowBtnList: {
        readonly type: PropType<(row: Record<string, any>) => RowBtn[]>;
        readonly required: false;
        readonly default: null;
    };
    readonly tableLoading: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: false;
    };
    readonly optWidth: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "150";
    };
    readonly rowKey: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "_X_ROW_KEY";
    };
    readonly schema: {
        readonly type: PropType<Schema>;
        readonly required: true;
    };
    readonly uiSchema: {
        readonly type: PropType<UiSchema>;
        readonly required: false;
        readonly default: () => {};
    };
}>>, {
    readonly showPager: boolean;
    readonly showIndex: boolean;
    readonly selectionType: "" | "checkbox";
    readonly pageInfo: PageInfo;
    readonly rowBtnList: (row: Record<string, any>) => RowBtn[];
    readonly tableLoading: boolean;
    readonly optWidth: string;
    readonly rowKey: string;
    readonly uiSchema: UiSchema;
}, {}>;

export declare type PageInfo = {
    currentPage: number;
    pageSize: number;
    total?: number;
};

export declare const ProTable: DefineComponent<{
    readonly fields: {
        readonly type: PropType<string[]>;
        readonly required: false;
    };
    readonly model: {
        readonly type: PropType<Record<string, any>[]>;
        readonly required: true;
    };
    readonly showPager: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: true;
    };
    readonly showIndex: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: false;
    };
    readonly selectionType: {
        readonly type: PropType<"" | "checkbox">;
        readonly required: false;
        readonly default: "";
    };
    readonly pageInfo: {
        readonly type: PropType<PageInfo>;
        readonly required: false;
        readonly default: () => {
            currentPage: number;
            pageSize: number;
            total: number;
        };
    };
    readonly rowBtnList: {
        readonly type: PropType<(row: Record<string, any>) => RowBtn[]>;
        readonly required: false;
        readonly default: null;
    };
    readonly tableLoading: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: false;
    };
    readonly optWidth: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "150";
    };
    readonly rowKey: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "_X_ROW_KEY";
    };
    readonly schema: {
        readonly type: PropType<Schema>;
        readonly required: true;
    };
    readonly uiSchema: {
        readonly type: PropType<UiSchema>;
        readonly required: false;
        readonly default: () => {};
    };
}, () => any, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{
    readonly fields: {
        readonly type: PropType<string[]>;
        readonly required: false;
    };
    readonly model: {
        readonly type: PropType<Record<string, any>[]>;
        readonly required: true;
    };
    readonly showPager: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: true;
    };
    readonly showIndex: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: false;
    };
    readonly selectionType: {
        readonly type: PropType<"" | "checkbox">;
        readonly required: false;
        readonly default: "";
    };
    readonly pageInfo: {
        readonly type: PropType<PageInfo>;
        readonly required: false;
        readonly default: () => {
            currentPage: number;
            pageSize: number;
            total: number;
        };
    };
    readonly rowBtnList: {
        readonly type: PropType<(row: Record<string, any>) => RowBtn[]>;
        readonly required: false;
        readonly default: null;
    };
    readonly tableLoading: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: false;
    };
    readonly optWidth: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "150";
    };
    readonly rowKey: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "_X_ROW_KEY";
    };
    readonly schema: {
        readonly type: PropType<Schema>;
        readonly required: true;
    };
    readonly uiSchema: {
        readonly type: PropType<UiSchema>;
        readonly required: false;
        readonly default: () => {};
    };
}>>, {
    readonly showPager: boolean;
    readonly showIndex: boolean;
    readonly selectionType: "" | "checkbox";
    readonly pageInfo: PageInfo;
    readonly rowBtnList: (row: Record<string, any>) => RowBtn[];
    readonly tableLoading: boolean;
    readonly optWidth: string;
    readonly rowKey: string;
    readonly uiSchema: UiSchema;
}, {}>;

export declare interface ProTableProp extends BasicTableProp {
    fields?: string[];
}

export declare const proTableProps: {
    readonly fields: {
        readonly type: PropType<string[]>;
        readonly required: false;
    };
    readonly model: {
        readonly type: PropType<Record<string, any>[]>;
        readonly required: true;
    };
    readonly showPager: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: true;
    };
    readonly showIndex: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: false;
    };
    readonly selectionType: {
        readonly type: PropType<"" | "checkbox">;
        readonly required: false;
        readonly default: "";
    };
    readonly pageInfo: {
        readonly type: PropType<PageInfo>;
        readonly required: false;
        readonly default: () => {
            currentPage: number;
            pageSize: number;
            total: number;
        };
    };
    readonly rowBtnList: {
        readonly type: PropType<(row: Record<string, any>) => RowBtn[]>;
        readonly required: false;
        readonly default: null;
    };
    readonly tableLoading: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: false;
    };
    readonly optWidth: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "150";
    };
    readonly rowKey: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "_X_ROW_KEY";
    };
    readonly schema: {
        readonly type: PropType<Schema>;
        readonly required: true;
    };
    readonly uiSchema: {
        readonly type: PropType<UiSchema>;
        readonly required: false;
        readonly default: () => {};
    };
};

export declare interface RowBtn {
    key: string;
    title: string;
    type?: BtnType;
    flag?: 'EDIT' | 'DEL' | null;
}

export { }
