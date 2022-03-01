import {Diagrama} from "./diagrama.model";
import {Input} from "./input.model";
import {Output} from "./output.model";

export interface Process {
  id?: number,
  name?: string,
  inputs?: Input[],
  tools?: string[],
  outputs?: Output[],
  duration?: number,
  state?: string,
  parentIds?: string[],
  diagrama?: Diagrama
}
