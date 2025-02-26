import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the @e2xgrader/cells extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@e2xgrader/cells:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, settingRegistry: ISettingRegistry | null) => {
    console.log('JupyterLab extension @e2xgrader/cells is activated!');

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('@e2xgrader/cells settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for @e2xgrader/cells.', reason);
        });
    }
  }
};

export default plugin;
