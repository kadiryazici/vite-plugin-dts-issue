import { type PropType } from 'vue';
declare type Item = {
    text: string;
};
export interface Props {
    items: Item[];
}
declare const _sfc_main: import("vue").DefineComponent<{
    items: {
        type: PropType<Item[]>;
        default: () => any[];
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<Item[]>;
        default: () => any[];
    };
}>>, {
    items: Item[];
}>;
export default _sfc_main;
