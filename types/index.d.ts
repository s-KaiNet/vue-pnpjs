import Vue, { PluginFunction, PluginObject } from 'vue';
import { SPRest } from '@pnp/sp';
import { GraphRest } from '@pnp/graph';

export declare interface PnPVueParam {
    sp?: typeof SPRest;
    graph?: typeof GraphRest;
}

declare module 'vue/types/vue' {
    interface Vue {
        $pnp: PnPVueParam;
    }
}

declare class VuePnPjs {
    static install: PluginFunction<PnPVueParam>;
}

export default VuePnPjs;