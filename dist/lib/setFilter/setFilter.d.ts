// ag-grid-enterprise v4.0.4
import { Filter } from "ag-grid/main";
export declare class SetFilter implements Filter {
    private eGui;
    private filterParams;
    private rowHeight;
    private model;
    private filterChangedCallback;
    private filterModifiedCallback;
    private valueGetter;
    private rowsInBodyContainer;
    private colDef;
    private localeTextFunc;
    private cellRenderer;
    private eListContainer;
    private eFilterValueTemplate;
    private eSelectAll;
    private eListViewport;
    private eMiniFilter;
    private api;
    private applyActive;
    private eApplyButton;
    init(params: any): void;
    afterGuiAttached(params: any): void;
    isFilterActive(): boolean;
    doesFilterPass(node: any): boolean;
    getGui(): any;
    onNewRowsLoaded(): void;
    onAnyFilterChanged(): void;
    private createTemplate();
    private createGui();
    private setupApply();
    private setContainerHeight();
    private drawVirtualRows();
    private ensureRowsRendered(start, finish);
    private removeVirtualRows(rowsToRemove);
    private insertRow(value, rowIndex);
    private onCheckboxClicked(eCheckbox, value);
    private filterChanged();
    private onMiniFilterChanged();
    private refreshVirtualRows();
    private clearVirtualRows();
    private onSelectAll();
    private updateAllCheckboxes(checked);
    private addScrollListener();
    getApi(): any;
    private createApi();
}