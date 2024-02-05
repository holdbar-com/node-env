import { spawn } from 'node:child_process';
import { basename, dirname, join } from 'node:path';
let proc;
export async function test(testFiles, changed) {
    proc?.kill('SIGTERM');
    proc = undefined;
    if (changed.length === 0) {
        return true;
    }
    if (changed.every((file) => dirname(file) === 'test')) {
        testFiles = testFiles.filter((file) => changed.includes(join('test', basename(file, '.js') + '.ts')));
    }
    if (testFiles.length === 0) {
        return true;
    }
    const options = {
        stdio: [process.stdin, process.stdout, process.stderr, 'pipe'],
    };
    const exitCode = await new Promise((resolve, reject) => {
        proc = spawn('node', [
            'node_modules/mocha/bin/mocha.js',
            '--parallel',
            '--jobs',
            '128',
            '--require',
            'source-map-support/register',
            ...testFiles,
        ], options);
        const onError = (error) => {
            reject(error);
            proc?.removeListener('error', onError);
            proc?.removeListener('exit', onExit);
            proc = undefined;
        };
        const onExit = (code) => {
            resolve(code);
            proc?.removeListener('error', onError);
            proc?.removeListener('exit', onExit);
            proc = undefined;
        };
        proc.addListener('error', onError);
        proc.addListener('exit', onExit);
    });
    return exitCode === 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBZ0IsS0FBSyxFQUFnQixNQUFNLG9CQUFvQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVwRCxJQUFJLElBQThCLENBQUM7QUFFbkMsTUFBTSxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsU0FBbUIsRUFBRSxPQUFpQjtJQUMvRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RCLElBQUksR0FBRyxTQUFTLENBQUM7SUFDakIsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDdEQsU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUNwQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUM5RCxDQUFDO0lBQ0osQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCxNQUFNLE9BQU8sR0FBaUI7UUFDNUIsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO0tBQy9ELENBQUM7SUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksT0FBTyxDQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNwRSxJQUFJLEdBQUcsS0FBSyxDQUNWLE1BQU0sRUFDTjtZQUNFLGlDQUFpQztZQUNqQyxZQUFZO1lBQ1osUUFBUTtZQUNSLEtBQUs7WUFDTCxXQUFXO1lBQ1gsNkJBQTZCO1lBQzdCLEdBQUcsU0FBUztTQUNiLEVBQ0QsT0FBTyxDQUNSLENBQUM7UUFDRixNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQy9CLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNkLElBQUksRUFBRSxjQUFjLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZDLElBQUksRUFBRSxjQUFjLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDbkIsQ0FBQyxDQUFDO1FBQ0YsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFtQixFQUFFLEVBQUU7WUFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2QsSUFBSSxFQUFFLGNBQWMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDdkMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDckMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUNuQixDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sUUFBUSxLQUFLLENBQUMsQ0FBQztBQUN4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hpbGRQcm9jZXNzLCBzcGF3biwgU3Bhd25PcHRpb25zIH0gZnJvbSAnbm9kZTpjaGlsZF9wcm9jZXNzJztcbmltcG9ydCB7IGJhc2VuYW1lLCBkaXJuYW1lLCBqb2luIH0gZnJvbSAnbm9kZTpwYXRoJztcblxubGV0IHByb2M6IENoaWxkUHJvY2VzcyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRlc3QodGVzdEZpbGVzOiBzdHJpbmdbXSwgY2hhbmdlZDogc3RyaW5nW10pIHtcbiAgcHJvYz8ua2lsbCgnU0lHVEVSTScpO1xuICBwcm9jID0gdW5kZWZpbmVkO1xuICBpZiAoY2hhbmdlZC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoY2hhbmdlZC5ldmVyeSgoZmlsZSkgPT4gZGlybmFtZShmaWxlKSA9PT0gJ3Rlc3QnKSkge1xuICAgIHRlc3RGaWxlcyA9IHRlc3RGaWxlcy5maWx0ZXIoKGZpbGUpID0+XG4gICAgICBjaGFuZ2VkLmluY2x1ZGVzKGpvaW4oJ3Rlc3QnLCBiYXNlbmFtZShmaWxlLCAnLmpzJykgKyAnLnRzJykpXG4gICAgKTtcbiAgfVxuICBpZiAodGVzdEZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IG9wdGlvbnM6IFNwYXduT3B0aW9ucyA9IHtcbiAgICBzdGRpbzogW3Byb2Nlc3Muc3RkaW4sIHByb2Nlc3Muc3Rkb3V0LCBwcm9jZXNzLnN0ZGVyciwgJ3BpcGUnXSxcbiAgfTtcbiAgY29uc3QgZXhpdENvZGUgPSBhd2FpdCBuZXcgUHJvbWlzZTxudW1iZXIgfCBudWxsPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcHJvYyA9IHNwYXduKFxuICAgICAgJ25vZGUnLFxuICAgICAgW1xuICAgICAgICAnbm9kZV9tb2R1bGVzL21vY2hhL2Jpbi9tb2NoYS5qcycsXG4gICAgICAgICctLXBhcmFsbGVsJyxcbiAgICAgICAgJy0tam9icycsXG4gICAgICAgICcxMjgnLFxuICAgICAgICAnLS1yZXF1aXJlJyxcbiAgICAgICAgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlcicsXG4gICAgICAgIC4uLnRlc3RGaWxlcyxcbiAgICAgIF0sXG4gICAgICBvcHRpb25zXG4gICAgKTtcbiAgICBjb25zdCBvbkVycm9yID0gKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIHByb2M/LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgcHJvYz8ucmVtb3ZlTGlzdGVuZXIoJ2V4aXQnLCBvbkV4aXQpO1xuICAgICAgcHJvYyA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIGNvbnN0IG9uRXhpdCA9IChjb2RlOiBudW1iZXIgfCBudWxsKSA9PiB7XG4gICAgICByZXNvbHZlKGNvZGUpO1xuICAgICAgcHJvYz8ucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICBwcm9jPy5yZW1vdmVMaXN0ZW5lcignZXhpdCcsIG9uRXhpdCk7XG4gICAgICBwcm9jID0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgcHJvYy5hZGRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcbiAgICBwcm9jLmFkZExpc3RlbmVyKCdleGl0Jywgb25FeGl0KTtcbiAgfSk7XG4gIHJldHVybiBleGl0Q29kZSA9PT0gMDtcbn1cbiJdfQ==