// pdfUtils.ts

import ILovePDFApi from '@ilovepdf/ilovepdf-nodejs';

const instance = new ILovePDFApi('project_public_18258489696c373bb674fff6fdc9de0a_EWjW4473a4012c5f7866254db1e4aaa3cea1e', 'secret_key_540a376b6362be84b47da3e448f555a3_w4CeR71f4507ee4ce6fbb931e2444f51e2a1c');

export async function convertImagesToPDF(imageUrls: string[]): Promise<Uint8Array> {
    try {
        const task = instance.newTask('imagepdf');
        await task.start();
        for (const imageUrl of imageUrls) {
            await task.addFile(imageUrl);
        }
        await task.process();
        const pdfData = await task.download();
        console.log('PDF conversion completed successfully.');
        return pdfData; // Return the PDF data
    } catch (error) {
        console.error('Error converting images to PDF:', error);
        throw error; // Propagate the error
    }
}
