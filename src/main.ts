import { Aurelia } from 'aurelia-framework';
import { setEditor } from 'libvantage';

export async function configure(aurelia: Aurelia): Promise<void> {
    aurelia.use.basicConfiguration().plugin('libvantage');
    await aurelia.start();
    await aurelia.setRoot('editor');
    setEditor(aurelia['root'].viewModel);
}