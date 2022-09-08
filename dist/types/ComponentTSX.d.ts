import { type PropType } from 'vue';
export interface Props {
    items: {
        text: string;
    }[];
}
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<{
            text: string;
        }[]>;
        default: () => any[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<{
            text: string;
        }[]>;
        default: () => any[];
    };
}>>, {
    items: {
        text: string;
    }[];
}>;
export default _default;
