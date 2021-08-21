import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: "replacePipe"
})
export class TransformPipe implements PipeTransform {
    transform(value, replace: string, replacement: string) {
        debugger;
        return value.replaceAll(replace, replacement);
    }
}