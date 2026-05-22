import {defineConfig} from 'sanity';
import  {deskTool} from 'sanity/desk';
import schemas from './sanity/schemas/';

const config = defineConfig({
    projectId: '3hf8g5le',
    dataset: 'production',
    title: 'DeComVo',
    apiVersion: '2023-03-04',
    basePath: '/studio',
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config
