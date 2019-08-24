import { Directive,ViewContainerRef,TemplateRef,Input } from '@angular/core';

@Directive({
  selector: '[roles]',
  inputs: ['roles']
})
export class RolesDirective {

  constructor(private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef,
    ) { }

    @Input() set roles(allowedRoles: Array<string>) {
      let shouldShow: boolean = false;
      let userRoles:Array<string> = ['admin'];
      for(let role of userRoles){
        if(role.toUpperCase() == "admin"){
          shouldShow = true;
          break;
        }
        for(let allowedRole of allowedRoles){
          allowedRole = allowedRole.toUpperCase();
          if(allowedRole.toUpperCase() == role.toUpperCase()){
            shouldShow = true;
            break;
          }
        }
      }
      if (shouldShow) {
        this._viewContainer.createEmbeddedView(this._templateRef);
      } else {
        this._viewContainer.clear();
      }
    }



}
