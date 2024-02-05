/*
const dirs = ['.vscode', '.idea/codeStyles/', '.idea/inspectionProfiles/'];
const files = [
  '.eslintrc.json',
  '.prettierrc',
  'tsconfig.json',
  '.vscode/settings.json',
  '.vscode/extensions.json',
  '.idea/compiler.xml',
  '.idea/codeStyles/codeStyleConfig.xml',
  '.idea/inspectionProfiles/Project_Default.xml',
];*/
export async function prepare() {
    /*await rm('template', { recursive: true, force: true })
      await mkdir('template')
      await Promise.all(dirs.map(dir => mkdir(join('template', dir), { recursive: true })))
      await Promise.all(files.map(file => copyFile(file, join('template', file))))
      await writeFile(
          'template/gitignore',
          (await readFile('.gitignore', 'utf-8'))
              .split(EOL)
              .filter(l => !!l && l !== 'template/')
              .concat(...files, '.gitignore', '')
              .join(EOL),
      )*/
}
export async function setup(_targetDir) {
    //await Promise.all(dirs.map(dir => mkdir(join(targetDir, dir), { recursive: true })))
    //await Promise.all(files.map(file => copyFile(join('template', file), join(targetDir, file))))
    //await copyFile('template/gitignore', join(targetDir, '.gitignore'))
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW52LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7Ozs7Ozs7OztJQVdJO0FBRUosTUFBTSxDQUFDLEtBQUssVUFBVSxPQUFPO0lBQzNCOzs7Ozs7Ozs7OztTQVdLO0FBQ1AsQ0FBQztBQUVELE1BQU0sQ0FBQyxLQUFLLFVBQVUsS0FBSyxDQUFDLFVBQWtCO0lBQzVDLHNGQUFzRjtJQUN0RiwrRkFBK0Y7SUFDL0YscUVBQXFFO0FBQ3ZFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB9IGZyb20gJ25vZGU6dXJsJ1xuLypcbmNvbnN0IGRpcnMgPSBbJy52c2NvZGUnLCAnLmlkZWEvY29kZVN0eWxlcy8nLCAnLmlkZWEvaW5zcGVjdGlvblByb2ZpbGVzLyddO1xuY29uc3QgZmlsZXMgPSBbXG4gICcuZXNsaW50cmMuanNvbicsXG4gICcucHJldHRpZXJyYycsXG4gICd0c2NvbmZpZy5qc29uJyxcbiAgJy52c2NvZGUvc2V0dGluZ3MuanNvbicsXG4gICcudnNjb2RlL2V4dGVuc2lvbnMuanNvbicsXG4gICcuaWRlYS9jb21waWxlci54bWwnLFxuICAnLmlkZWEvY29kZVN0eWxlcy9jb2RlU3R5bGVDb25maWcueG1sJyxcbiAgJy5pZGVhL2luc3BlY3Rpb25Qcm9maWxlcy9Qcm9qZWN0X0RlZmF1bHQueG1sJyxcbl07Ki9cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZXBhcmUoKSB7XG4gIC8qYXdhaXQgcm0oJ3RlbXBsYXRlJywgeyByZWN1cnNpdmU6IHRydWUsIGZvcmNlOiB0cnVlIH0pXG4gICAgYXdhaXQgbWtkaXIoJ3RlbXBsYXRlJylcbiAgICBhd2FpdCBQcm9taXNlLmFsbChkaXJzLm1hcChkaXIgPT4gbWtkaXIoam9pbigndGVtcGxhdGUnLCBkaXIpLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KSkpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoZmlsZXMubWFwKGZpbGUgPT4gY29weUZpbGUoZmlsZSwgam9pbigndGVtcGxhdGUnLCBmaWxlKSkpKVxuICAgIGF3YWl0IHdyaXRlRmlsZShcbiAgICAgICAgJ3RlbXBsYXRlL2dpdGlnbm9yZScsXG4gICAgICAgIChhd2FpdCByZWFkRmlsZSgnLmdpdGlnbm9yZScsICd1dGYtOCcpKVxuICAgICAgICAgICAgLnNwbGl0KEVPTClcbiAgICAgICAgICAgIC5maWx0ZXIobCA9PiAhIWwgJiYgbCAhPT0gJ3RlbXBsYXRlLycpXG4gICAgICAgICAgICAuY29uY2F0KC4uLmZpbGVzLCAnLmdpdGlnbm9yZScsICcnKVxuICAgICAgICAgICAgLmpvaW4oRU9MKSxcbiAgICApKi9cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldHVwKF90YXJnZXREaXI6IHN0cmluZykge1xuICAvL2F3YWl0IFByb21pc2UuYWxsKGRpcnMubWFwKGRpciA9PiBta2Rpcihqb2luKHRhcmdldERpciwgZGlyKSwgeyByZWN1cnNpdmU6IHRydWUgfSkpKVxuICAvL2F3YWl0IFByb21pc2UuYWxsKGZpbGVzLm1hcChmaWxlID0+IGNvcHlGaWxlKGpvaW4oJ3RlbXBsYXRlJywgZmlsZSksIGpvaW4odGFyZ2V0RGlyLCBmaWxlKSkpKVxuICAvL2F3YWl0IGNvcHlGaWxlKCd0ZW1wbGF0ZS9naXRpZ25vcmUnLCBqb2luKHRhcmdldERpciwgJy5naXRpZ25vcmUnKSlcbn1cbiJdfQ==