import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';


const config: PlaywrightTestConfig = {
    use:{
      headless:false,
      channel:"chrome",
      
    },
   reporter:[["html"]],
    testDir :"tests/"
  
    }
    testMatch:["tests"]
  
  
  export default config;