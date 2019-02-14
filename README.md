# Vue.js and PnP.js integration plugin 

## How to use

1. Install the plugin:
   ```bash 
      npm install vue-pnpjs
   ```
  2. Initialize it in your main file: 
     ```typescript
        import Vue from 'vue';
        import VuePnP from 'vue-pnpjs';

        import { sp } from '@pnp/sp';
        import { graph } from '@pnp/graph';
        import { setup } from '@pnp/common';

        setup({...})

        Vue.use(VuePnP, {
          sp: sp,
          graph: graph
        });
     ```
  3. Use it in your Vue instances: 
      ```typescript
        this.$pnp.sp.web.get().then(...)
      ```