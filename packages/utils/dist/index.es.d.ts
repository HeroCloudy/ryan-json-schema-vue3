import type { PropType } from 'vue';

export declare interface BasicSchemaProp {
    schema: Schema;
    uiSchema?: UiSchema;
}

export declare const basicSchemaProps: {
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

export declare const buildOfItem: (title: string, value: any) => OfItem<any>;

export declare const buildSchema: (schema: Schema, fields?: string[]) => Schema;

export declare const getSchemaDefaultModel: (schema: Schema, fields?: string[]) => Record<string, any>;

/**
 * 获取 SchemaProp 的默认值
 * @param schemaProp
 */
export declare const getSchemaPropDefaultValue: (schemaProp: SchemaItem) => any;

export declare const getTableDefaultUiSchema: (fields: string[], defaultWidth: number, fixed: boolean, excludeFields?: string[]) => UiSchema;

export declare interface OfItem<T> {
    title: string;
    const: T;
}

export declare interface Schema {
    type?: SchemaType | string;
    properties: Record<string, SchemaItem>;
    required?: string[];
}

export declare type SchemaFormat = 'date' | 'time' | 'date-time' | 'email' | string;

export declare interface SchemaItem {
    description?: string;
    type: SchemaType | string;
    prop?: string;
    format?: SchemaFormat;
    oneOf?: OfItem<string | number | boolean>[];
    anyOf?: OfItem<SchemaType | string>[];
    default?: SchemaType | string;
    required?: boolean;
    updatable?: boolean;
    maxLength?: number | string;
    precision?: number | string;
    scale?: number | string;
}

export declare enum SchemaType {
    STRING = "string",
    NUMBER = "number",
    ARRAY = "array",
    BOOLEAN = "boolean"
}

export declare const UI_COLUMN = "ui:column";

export declare const UI_DISABLED = "ui:disabled";

export declare const UI_HIDDEN = "ui:hidden";

export declare const UI_OPTIONS = "ui:options";

export declare const UI_WIDGET = "ui:widget";

export declare const UI_WIDTH = "ui:width";

export declare type UiSchema = {
    [key: string]: UiSchemaItem;
};

export declare type UiSchemaItem = {
    [UI_HIDDEN]?: boolean;
    [UI_DISABLED]?: boolean;
    [UI_WIDTH]?: number;
    [UI_OPTIONS]?: Record<string, any>;
    [UI_WIDGET]?: UiWidgets | string;
    [UI_COLUMN]?: number;
};

export declare enum UiWidgets {
    SELECT = "select",
    RADIO = "radio",
    CHECKBOX = "checkbox",
    SWITCH = "switch",
    INPUT = "input",
    TEXTAREA = "textarea"
}

export { }
