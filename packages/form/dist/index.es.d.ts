import { Arrayable } from 'element-plus/es/utils';
import { BasicSchemaProp } from '@ryan-json-schema-vue3/utils';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { FormItemRule } from 'element-plus';
import { FormRules } from 'element-plus';
import type { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { Schema } from '@ryan-json-schema-vue3/utils';
import type { SetupContext } from 'vue';
import { UiSchema } from '@ryan-json-schema-vue3/utils';

export declare const basicDescriptionProps: {
    readonly model: {
        readonly type: PropType<{
            [key: string]: any;
        }>;
        readonly required: true;
    };
    readonly column: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: 3;
    };
    readonly size: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "default";
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: true;
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

export declare interface BasicFormProp extends BasicSchemaProp {
    model: Record<string, any>;
    column?: number;
    rules?: FormRules;
}

export declare const basicFormProps: {
    readonly model: {
        readonly type: PropType<Record<string, any>>;
        readonly required: true;
    };
    readonly column: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: 3;
    };
    readonly rules: {
        readonly type: PropType<Partial<Record<string, Arrayable<FormItemRule>>>>;
        readonly required: false;
        readonly default: () => {};
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

export declare const bindEvent: (context: SetupContext, formData: Record<string, any>) => {
    onDataChange: (key: string, value: any) => void;
    onEnterUp: (e: KeyboardEvent) => void;
};

export declare const bindMethod: (getFormRef: any) => {
    reset: () => void;
    validate: (callback: any) => void;
};

export declare const JsonDescription: DefineComponent<{
    readonly model: {
        readonly type: PropType<{
            [key: string]: any;
        }>;
        readonly required: true;
    };
    readonly column: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: 3;
    };
    readonly size: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "default";
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: true;
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
        readonly type: PropType<{
            [key: string]: any;
        }>;
        readonly required: true;
    };
    readonly column: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: 3;
    };
    readonly size: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "default";
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: true;
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
    readonly uiSchema: UiSchema;
    readonly column: number;
    readonly size: string;
    readonly border: boolean;
}, {}>;

export declare const JsonForm: DefineComponent<{
    readonly model: {
        readonly type: PropType<Record<string, any>>;
        readonly required: true;
    };
    readonly column: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: 3;
    };
    readonly rules: {
        readonly type: PropType<Partial<Record<string, Arrayable<FormItemRule>>>>;
        readonly required: false;
        readonly default: () => {};
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
        readonly type: PropType<Record<string, any>>;
        readonly required: true;
    };
    readonly column: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: 3;
    };
    readonly rules: {
        readonly type: PropType<Partial<Record<string, Arrayable<FormItemRule>>>>;
        readonly required: false;
        readonly default: () => {};
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
    readonly column: number;
    readonly rules: Partial<Record<string, Arrayable<FormItemRule>>>;
    readonly uiSchema: UiSchema;
}, {}>;

export declare const JsonFormDescription: DefineComponent<{
    readonly readMode: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: false;
    };
    readonly fields: {
        readonly type: PropType<string[]>;
        readonly required: false;
    };
    readonly model: {
        readonly type: PropType<{
            [key: string]: any;
        }>;
        readonly required: true;
    };
    readonly column: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: 3;
    };
    readonly size: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "default";
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: true;
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
    readonly rules: {
        readonly type: PropType<Partial<Record<string, Arrayable<FormItemRule>>>>;
        readonly required: false;
        readonly default: () => {};
    };
}, () => any, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{
    readonly readMode: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: false;
    };
    readonly fields: {
        readonly type: PropType<string[]>;
        readonly required: false;
    };
    readonly model: {
        readonly type: PropType<{
            [key: string]: any;
        }>;
        readonly required: true;
    };
    readonly column: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: 3;
    };
    readonly size: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "default";
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: true;
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
    readonly rules: {
        readonly type: PropType<Partial<Record<string, Arrayable<FormItemRule>>>>;
        readonly required: false;
        readonly default: () => {};
    };
}>>, {
    readonly uiSchema: UiSchema;
    readonly column: number;
    readonly readMode: boolean;
    readonly size: string;
    readonly border: boolean;
    readonly rules: Partial<Record<string, Arrayable<FormItemRule>>>;
}, {}>;

export declare const jsonFormDescriptionProps: {
    readonly readMode: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: false;
    };
    readonly fields: {
        readonly type: PropType<string[]>;
        readonly required: false;
    };
    readonly model: {
        readonly type: PropType<{
            [key: string]: any;
        }>;
        readonly required: true;
    };
    readonly column: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: 3;
    };
    readonly size: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "default";
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: true;
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
    readonly rules: {
        readonly type: PropType<Partial<Record<string, Arrayable<FormItemRule>>>>;
        readonly required: false;
        readonly default: () => {};
    };
};

export declare const ProDescription: DefineComponent<{
    readonly fields: {
        readonly type: PropType<string[]>;
        readonly required: false;
    };
    readonly model: {
        readonly type: PropType<{
            [key: string]: any;
        }>;
        readonly required: true;
    };
    readonly column: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: 3;
    };
    readonly size: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "default";
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: true;
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
        readonly type: PropType<{
            [key: string]: any;
        }>;
        readonly required: true;
    };
    readonly column: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: 3;
    };
    readonly size: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "default";
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: true;
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
    readonly uiSchema: UiSchema;
    readonly column: number;
    readonly size: string;
    readonly border: boolean;
}, {}>;

export declare const proDescriptionProps: {
    readonly fields: {
        readonly type: PropType<string[]>;
        readonly required: false;
    };
    readonly model: {
        readonly type: PropType<{
            [key: string]: any;
        }>;
        readonly required: true;
    };
    readonly column: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: 3;
    };
    readonly size: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "default";
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly required: false;
        readonly default: true;
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

export declare const ProForm: DefineComponent<{
    readonly fields: {
        readonly type: PropType<string[]>;
        readonly required: false;
    };
    readonly model: {
        readonly type: PropType<Record<string, any>>;
        readonly required: true;
    };
    readonly column: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: 3;
    };
    readonly rules: {
        readonly type: PropType<Partial<Record<string, Arrayable<FormItemRule>>>>;
        readonly required: false;
        readonly default: () => {};
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
        readonly type: PropType<Record<string, any>>;
        readonly required: true;
    };
    readonly column: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: 3;
    };
    readonly rules: {
        readonly type: PropType<Partial<Record<string, Arrayable<FormItemRule>>>>;
        readonly required: false;
        readonly default: () => {};
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
    readonly uiSchema: UiSchema;
    readonly column: number;
    readonly rules: Partial<Record<string, Arrayable<FormItemRule>>>;
}, {}>;

export declare interface ProFormProp extends BasicFormProp {
    fields?: string[];
}

export declare const proFormProps: {
    readonly fields: {
        readonly type: PropType<string[]>;
        readonly required: false;
    };
    readonly model: {
        readonly type: PropType<Record<string, any>>;
        readonly required: true;
    };
    readonly column: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: 3;
    };
    readonly rules: {
        readonly type: PropType<Partial<Record<string, Arrayable<FormItemRule>>>>;
        readonly required: false;
        readonly default: () => {};
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

declare const RyanFrom: Plugin_2<[]>;
export default RyanFrom;

export { }
