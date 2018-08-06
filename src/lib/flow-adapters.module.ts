import {NgModule} from '@angular/core';
import {SearchPaginationModelService} from "../search-pagination/model.service";
import {EntityModelService} from "../entity/model.service";

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    SearchPaginationModelService,
    EntityModelService
  ]
})
export class FlowAdaptersModule {
}
