import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@qius.solutions/qiusng/button';
import { CalendarModule } from '@qius.solutions/qiusng/calendar';
import { ConfirmDialogModule } from '@qius.solutions/qiusng/confirmdialog';
import { ContextMenuModule } from '@qius.solutions/qiusng/contextmenu';
import { DialogModule } from '@qius.solutions/qiusng/dialog';
import { DropdownModule } from '@qius.solutions/qiusng/dropdown';
import { FileUploadModule } from '@qius.solutions/qiusng/fileupload';
import { SelectButtonModule } from '@qius.solutions/qiusng/selectbutton';
import { InputSwitchModule } from '@qius.solutions/qiusng/inputswitch';
import { InputNumberModule } from '@qius.solutions/qiusng/inputnumber';
import { InputTextModule } from '@qius.solutions/qiusng/inputtext';
import { InputTextareaModule } from '@qius.solutions/qiusng/inputtextarea';
import { MultiSelectModule } from '@qius.solutions/qiusng/multiselect';
import { ProgressBarModule } from '@qius.solutions/qiusng/progressbar';
import { RadioButtonModule } from '@qius.solutions/qiusng/radiobutton';
import { RatingModule } from '@qius.solutions/qiusng/rating';
import { SkeletonModule } from '@qius.solutions/qiusng/skeleton';
import { SliderModule } from '@qius.solutions/qiusng/slider';
import { TableModule } from '@qius.solutions/qiusng/table';
import { TabViewModule } from '@qius.solutions/qiusng/tabview';
import { TagModule } from '@qius.solutions/qiusng/tag';
import { ToastModule } from '@qius.solutions/qiusng/toast';
import { ToggleButtonModule } from '@qius.solutions/qiusng/togglebutton';
import { ToolbarModule } from '@qius.solutions/qiusng/toolbar';
import { TooltipModule } from '@qius.solutions/qiusng/tooltip';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { ContextMenuDoc } from './contextmenudoc';
import { BasicDoc } from './basicdoc';
import { CellEditDoc } from './celleditdoc';
import { CheckboxSelectionDoc } from './checkboxselectiondoc';
import { ColumnGroupDoc } from './columngroupdoc';
import { ColumnResizeExpandModeDoc } from './columnresizeexpandmodedoc';
import { ColumnResizeScrollableModeDoc } from './columnresizescrollablemodedoc';
import { ColumnSelectionDoc } from './columnselectiondoc';
import { ColumnToggleDoc } from './columntoggledoc';
import { ControlledSelectionDoc } from './controlledselectiondoc';
import { CustomersDoc } from './customersdoc';
import { CustomSortDoc } from './customsortdoc';
import { DynamicDoc } from './dynamicdoc';
import { ExpandableRowGroupDoc } from './expandablerowgroupdoc';
import { ExportDoc } from './exportdoc';
import { FilterMenuDoc } from './filtermenudoc';
import { FilterRowDoc } from './filterrowdoc';
import { FlexibleScrollDoc } from './flexiblescrolldoc';
import { FrozenColumnsDoc } from './frozencolumnsdoc';
import { FrozenRowsDoc } from './frozenrowsdoc';
import { GridlinesDoc } from './gridlinesdoc';
import { ImportDoc } from './importdoc';
import { HorizontalAndVerticalScrollDoc } from './horizontalandverticaldoc';
import { LazyLoadDoc } from './lazyloaddoc';
import { MultipleSelectionDoc } from './multipleselectiondoc';
import { PageOnlySelectionDoc } from './pageonlyselectiondoc';
import { PaginatorBasicDoc } from './paginatorbasicdoc';
import { PaginatorProgrammaticDoc } from './paginatorprogrammaticdoc';
import { ProductsDoc } from './productsdoc';
import { RadioButtonSelectionDoc } from './radiobuttonselectiondoc';
import { ReorderDoc } from './reorderdoc';
import { ResponsiveScrollDoc } from './responsivescrolldoc';
import { ResponsiveStackDoc } from './responsivestackdoc';
import { RowEditDoc } from './roweditdoc';
import { RowExpandDoc } from './rowexpanddoc';
import { RowspanGroupingDoc } from './rowspangroupingdoc';
import { SingleColumnSortDoc } from './singlecolumnsortdoc';
import { SingleSelectionDoc } from './singleselectiondoc';
import { SizeDoc } from './sizedoc';
import { StatefulDoc } from './statefuldoc';
import { StripedDoc } from './stripeddoc';
import { StyleDoc } from './styledoc';
import { SubheaderGroupingDoc } from './subheadergroupingdoc';
import { TemplateDoc } from './templatedoc';
import { VerticalScrollDoc } from './verticalscrolldoc';
import { VirtualScrollDoc } from './virtualscrolldoc';
import { VirtualScrollLazyDoc } from './virtualscrolllazydoc';
import { ColumnResizeFitModeDoc } from './columnresizefitmodedoc';
import { PropsDoc } from './propsdoc';
import { EventsDoc } from './eventsdoc';
import { StylingDoc } from './stylingdoc';
import { MethodsDoc } from './methodsdoc';
import { TemplatesDoc } from './templatesdoc';
import { SelectionEventsDoc } from './selectioneventsdoc';
import { AccessibilityDoc } from './accessibilitydoc';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        CalendarModule,
        SliderModule,
        DialogModule,
        ConfirmDialogModule,
        MultiSelectModule,
        ContextMenuModule,
        DropdownModule,
        ButtonModule,
        TagModule,
        ToastModule,
        InputTextModule,
        InputSwitchModule,
        InputNumberModule,
        InputTextareaModule,
        ProgressBarModule,
        TooltipModule,
        RadioButtonModule,
        ToolbarModule,
        FileUploadModule,
        TabViewModule,
        ToggleButtonModule,
        RatingModule,
        SkeletonModule,
        SelectButtonModule,
        AppCodeModule,
        AppDocModule
    ],
    declarations: [
        ImportDoc,
        BasicDoc,
        DynamicDoc,
        CellEditDoc,
        CheckboxSelectionDoc,
        ColumnGroupDoc,
        ColumnResizeExpandModeDoc,
        ColumnResizeScrollableModeDoc,
        ColumnResizeFitModeDoc,
        ColumnSelectionDoc,
        ColumnToggleDoc,
        ContextMenuDoc,
        ControlledSelectionDoc,
        CustomersDoc,
        CustomSortDoc,
        DynamicDoc,
        ExpandableRowGroupDoc,
        ExportDoc,
        FilterMenuDoc,
        FilterRowDoc,
        FlexibleScrollDoc,
        FrozenColumnsDoc,
        FrozenRowsDoc,
        GridlinesDoc,
        HorizontalAndVerticalScrollDoc,
        LazyLoadDoc,
        MultipleSelectionDoc,
        PageOnlySelectionDoc,
        PaginatorBasicDoc,
        MultipleSelectionDoc,
        PageOnlySelectionDoc,
        PaginatorProgrammaticDoc,
        ProductsDoc,
        RadioButtonSelectionDoc,
        ReorderDoc,
        ResponsiveScrollDoc,
        ResponsiveStackDoc,
        RowEditDoc,
        RowExpandDoc,
        RowspanGroupingDoc,
        SingleColumnSortDoc,
        SingleSelectionDoc,
        SizeDoc,
        StatefulDoc,
        StripedDoc,
        StyleDoc,
        SubheaderGroupingDoc,
        TemplateDoc,
        VerticalScrollDoc,
        VirtualScrollDoc,
        VirtualScrollLazyDoc,
        PropsDoc,
        EventsDoc,
        StylingDoc,
        MethodsDoc,
        TemplatesDoc,
        SelectionEventsDoc,
        AccessibilityDoc
    ],
    exports: [AppDocModule]
})
export class TableDocModule {}
