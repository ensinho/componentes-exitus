import { CommonModule, Location } from "@angular/common";
import { Component, TemplateRef, viewChild, OnInit } from "@angular/core";
import { MatFabButton } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { ExitusEditorComponent } from "@components/exitus-editor/exitus-editor.component";
import { BreadcrumbService } from "@services/app-services/breadcrumb.service";
import { TablerIconsModule } from "angular-tabler-icons";

@Component({
    selector: "edit-material",
    templateUrl: "./edit-material-aprendizagem.html",
    styleUrl: '../material-aprendizagem.scss',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        ExitusEditorComponent,
        TablerIconsModule,
        MatFabButton
    ]
})
export class EditMaterialAprendizagem implements OnInit {
    constructor(private location: Location,
        private breadcrumbService: BreadcrumbService, ) {}

    breadcrumbButtons = viewChild('breadcrumbbuttons', {read: TemplateRef});
    
    ngOnInit(): void {
        this.breadcrumbService.updateBreadcrumbComponent(this.breadcrumbButtons()!);
    }
    goBack() {
        this.location.back();
    }
}