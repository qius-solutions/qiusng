import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FileUpload } from './fileupload';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarModule } from '@qius.solutions/qiusng/progressbar';
import { ButtonModule } from '@qius.solutions/qiusng/button';
import { QiusTemplate } from '@qius.solutions/qiusng/api';
import { MessagesModule } from '@qius.solutions/qiusng/messages';
import { HttpClientModule } from '@angular/common/http';
import { PlusIcon } from '@qius.solutions/qiusng/icons/plus';
import { TimesIcon } from '@qius.solutions/qiusng/icons/times';
import { UploadIcon } from '@qius.solutions/qiusng/icons/upload';

describe('FileUpload', () => {
    let fileupload: FileUpload;
    let fixture: ComponentFixture<FileUpload>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, ProgressBarModule, MessagesModule, ButtonModule, HttpClientModule, PlusIcon, TimesIcon, UploadIcon],
            declarations: [FileUpload, QiusTemplate]
        });

        fixture = TestBed.createComponent(FileUpload);
        fileupload = fixture.componentInstance;
    });

    it('should display by default (basic)', () => {
        fileupload.mode = 'basic';
        fixture.detectChanges();

        const fileuploadEl = fixture.debugElement.query(By.css('span'));
        expect(fileuploadEl).toBeTruthy();
        expect(fileuploadEl.nativeElement.className).toContain('p-fileupload-choose');
        expect(fileuploadEl.nativeElement.className).toContain('p-button');
        expect(fixture.debugElement.query(By.css('.p-fileupload-advanced'))).toBeFalsy();
    });

    it('should display by default (advanced)', () => {
        fixture.detectChanges();

        const fileuploadEl = fixture.debugElement.query(By.css('div'));
        expect(fileuploadEl).toBeTruthy();
        expect(fileuploadEl.nativeElement.className).toContain('p-fileupload-advanced');
        expect(fileuploadEl.children.length).toEqual(2);
    });

    it('should change style, styleClass, chooseLabel, uploadLabel, cancelLabel, showUploadButton and showCancelButton (advanced)', () => {
        fileupload.style = { height: '300px' };
        fileupload.styleClass = 'Qiusng ROCKS!';
        fileupload.chooseLabel = 'qiusng';
        fileupload.uploadLabel = 'qiusng';
        fileupload.cancelLabel = 'qiusng';
        fixture.detectChanges();

        const fileuploadEl = fixture.debugElement.query(By.css('div'));
        const uploadButton = fixture.debugElement.queryAll(By.css('button'))[0];
        const cancelButton = fixture.debugElement.queryAll(By.css('button'))[1];
        const chooseButton = fixture.debugElement.query(By.css('.p-fileupload-choose'));
        expect(fileuploadEl).toBeTruthy();
        expect(fileuploadEl.nativeElement.className).toContain('Qiusng ROCKS!');
        expect(fileuploadEl.nativeElement.style.height).toContain('300px');
        expect(uploadButton).toBeTruthy();
        expect(cancelButton).toBeTruthy();
        expect(uploadButton.nativeElement.textContent).toEqual('qiusng');
        expect(cancelButton.nativeElement.textContent).toEqual('qiusng');
        expect(chooseButton.nativeElement.textContent).toEqual('qiusng');
    });

    it('should call onFileSelect (advanced)', () => {
        fixture.detectChanges();

        let event;
        event = {
            target: {
                files: [
                    {
                        lastModified: 1533276674178,
                        name: 'qiusng.txt',
                        size: 179,
                        type: 'text/plain'
                    }
                ]
            }
        };
        fileupload.onFileSelect(event);
        fixture.detectChanges();

        fileupload.cd.detectChanges();
        const uploadButton = fixture.debugElement.queryAll(By.css('button'))[0];
        const cancelButton = fixture.debugElement.queryAll(By.css('button'))[1];
        const fileUploadRow = fixture.debugElement.query(By.css('.p-fileupload-row'));
        const fileNameEl = fileUploadRow.children[1];
        const fileSizeEl = fileUploadRow.children[2];
        const removeButtonEl = fileUploadRow.query(By.css('button'));
        expect(fileUploadRow).toBeTruthy();
        expect(fileNameEl).toBeTruthy();
        expect(fileNameEl).toBeTruthy();
        expect(removeButtonEl).toBeTruthy();
        expect(fileNameEl.nativeElement.textContent).toEqual('qiusng.txt');
        expect(fileSizeEl.nativeElement.textContent).toEqual('179 B');
        expect(fileupload.hasFiles()).toEqual(true);
        expect(uploadButton.nativeElement.disabled).toEqual(false);
        expect(cancelButton.nativeElement.disabled).toEqual(false);
    });

    it('should call upload (advanced)', () => {
        fileupload.auto = true;
        fileupload.url = ' ';
        fixture.detectChanges();

        let event;
        let blob: Blob;
        blob = new Blob(
            [
                JSON.stringify([
                    {
                        lastModified: 1533276674178,
                        name: 'qiusng.txt',
                        size: 179,
                        type: 'text/plain'
                    }
                ])
            ],
            { type: 'application/json' }
        );
        let blobFile = new File([blob], 'qiusng.txt');
        event = {
            target: { files: [blobFile] },
            stopPropagation() {},
            preventDefault() {}
        };
        const uploadSpy = spyOn(fileupload, 'upload').and.callThrough();
        fileupload.onFileSelect(event);
        fixture.detectChanges();

        expect(uploadSpy).toHaveBeenCalled();
    });

    it('should not push same file', () => {
        fileupload.multiple = true;
        fileupload.url = ' ';
        fixture.detectChanges();

        let event;
        let blob: Blob;
        blob = new Blob(
            [
                JSON.stringify([
                    {
                        lastModified: 1533276674178,
                        name: 'qiusng.txt',
                        size: 179,
                        type: 'text/plain'
                    }
                ])
            ],
            { type: 'application/json' }
        );
        let blobFile = new File([blob], 'qiusng.txt');
        event = {
            target: { files: [blobFile] },
            stopPropagation() {},
            preventDefault() {}
        };
        fileupload.onFileSelect(event);
        fixture.detectChanges();

        expect(fileupload.files.length).toEqual(1);
        fileupload.onFileSelect(event);
        fixture.detectChanges();

        expect(fileupload.files.length).toEqual(1);
    });

    it('should not push when exceeded filelimit', () => {
        fileupload.multiple = true;
        fileupload.fileLimit = 1;
        fileupload.auto = true;
        fileupload.url = ' ';
        fixture.detectChanges();

        let event;
        let blob: Blob;
        blob = new Blob(
            [
                JSON.stringify([
                    {
                        lastModified: 1533276674178,
                        name: 'qiusng.txt',
                        size: 179,
                        type: 'text/plain'
                    },
                    {
                        lastModified: 1533276674179,
                        name: 'qiusng2.txt',
                        size: 123,
                        type: 'text/plain'
                    }
                ])
            ],
            { type: 'application/json' }
        );
        let blobFile = new File([blob], 'qiusng.txt');
        let blobFile2 = new File([blob], 'qiusng2.txt');
        event = {
            target: { files: [blobFile, blobFile2] },
            stopPropagation() {},
            preventDefault() {}
        };
        const uploadSpy = spyOn(fileupload, 'upload').and.callThrough();
        fileupload.onFileSelect(event);
        fixture.detectChanges();

        expect(fileupload.files.length).toEqual(2);
        expect(uploadSpy).not.toHaveBeenCalled();
    });

    it('should call upload with customUpload (advanced)', () => {
        fileupload.auto = true;
        fileupload.customUpload = true;
        fileupload.url = ' ';
        let data;
        fileupload.uploadHandler.subscribe((value) => (data = value));
        fixture.detectChanges();

        let event;
        event = {
            target: {
                files: [
                    {
                        lastModified: 1533276674178,
                        name: 'qiusng.txt',
                        size: 179,
                        type: 'text/plain'
                    }
                ]
            }
        };
        const uploadSpy = spyOn(fileupload, 'upload').and.callThrough();
        fileupload.onFileSelect(event);
        fixture.detectChanges();
        expect(uploadSpy).toHaveBeenCalled();
        expect(data.files).toEqual(event.target.files);
    });

    it('should call onDrageEnter onDragLeave onDrop and onFileSelect (advanced)', () => {
        fileupload.customUpload = true;
        fileupload.url = ' ';
        fileupload.multiple = true;
        fixture.detectChanges();

        let event;
        event = {
            target: {
                files: [
                    {
                        lastModified: 1533276674178,
                        name: 'qiusng.txt',
                        size: 179,
                        type: 'text/plain'
                    }
                ]
            },
            stopPropagation() {},
            preventDefault() {}
        };
        let event2;
        event2 = {
            target: {
                files: [
                    {
                        lastModified: 1533276684178,
                        name: 'qius.txt',
                        size: 179,
                        type: 'text/plain'
                    }
                ]
            },
            stopPropagation() {},
            preventDefault() {}
        };
        fileupload.onFileSelect(event);
        fixture.detectChanges();
        const onDragEnterSpy = spyOn(fileupload, 'onDragEnter').and.callThrough();
        const onDragLeaveSpy = spyOn(fileupload, 'onDragLeave').and.callThrough();
        const onDropSpy = spyOn(fileupload, 'onDrop').and.callThrough();
        const onFileSelectSpy = spyOn(fileupload, 'onFileSelect').and.callThrough();
        fileupload.onDragEnter(event);
        fileupload.onDragOver(event);
        fixture.detectChanges();

        const contentEl = fixture.debugElement.query(By.css('.p-fileupload-content'));
        expect(fileupload.dragHighlight).toEqual(true);
        expect(contentEl.nativeElement.className).toContain('p-fileupload-highlight');
        expect(onDragEnterSpy).toHaveBeenCalled();
        fileupload.onDragLeave(event);
        fixture.detectChanges();

        expect(onDragLeaveSpy).toHaveBeenCalled();
        expect(contentEl.nativeElement.className).not.toContain('p-fileupload-highlight');
        fileupload.onDrop(event2);
        fixture.detectChanges();

        expect(onDropSpy).toHaveBeenCalled();
        expect(onFileSelectSpy).toHaveBeenCalled();
        expect(fileupload.files.length).toEqual(2);
    });

    it('should call clear and remove (advanced)', () => {
        fileupload.customUpload = true;
        fileupload.url = ' ';
        fileupload.multiple = true;
        fixture.detectChanges();

        let event;
        event = {
            target: {
                files: [
                    {
                        lastModified: 1533276674178,
                        name: 'qiusng.txt',
                        size: 179,
                        type: 'text/plain'
                    }
                ]
            },
            stopPropagation() {},
            preventDefault() {}
        };
        let event2;
        event2 = {
            target: {
                files: [
                    {
                        lastModified: 1533276684178,
                        name: 'qius.txt',
                        size: 179,
                        type: 'text/plain'
                    }
                ]
            },
            stopPropagation() {},
            preventDefault() {}
        };
        const removeSpy = spyOn(fileupload, 'remove').and.callThrough();
        const clearSpy = spyOn(fileupload, 'clear').and.callThrough();
        fileupload.onFileSelect(event);
        fileupload.onFileSelect(event2);
        fixture.detectChanges();

        fileupload.cd.detectChanges();
        const buttons = fixture.debugElement.queryAll(By.css('button'));
        const firstElRemoveButton = buttons[2];
        firstElRemoveButton.nativeElement.click();
        fixture.detectChanges();

        expect(fileupload.files.length).toEqual(1);
        expect(removeSpy).toHaveBeenCalled();
        fileupload.onFileSelect(event);
        fixture.detectChanges();

        const clearButton = buttons[1];
        clearButton.nativeElement.click();
        fixture.detectChanges();

        expect(fileupload.files.length).toEqual(0);
        expect(clearSpy).toHaveBeenCalled();
    });

    it('should display by default (basic)', () => {
        fileupload.mode = 'basic';
        fileupload.url = ' ';
        fixture.detectChanges();
        let event;
        let blob: Blob;
        blob = new Blob(
            [
                JSON.stringify([
                    {
                        lastModified: 1533276674178,
                        name: 'qiusng.txt',
                        size: 179,
                        type: 'text/plain'
                    }
                ])
            ],
            { type: 'application/json' }
        );
        let blobFile = new File([blob], 'qiusng.txt');
        event = {
            target: { files: [blobFile] },
            stopPropagation() {},
            preventDefault() {}
        };
        const uploadSpy = spyOn(fileupload, 'upload').and.callThrough();
        const onBasicUploaderClickkSpy = spyOn(fileupload, 'onBasicUploaderClick').and.callThrough();
        fileupload.onFileSelect(event);
        fixture.detectChanges();

        fileupload.onBasicUploaderClick();
        fixture.detectChanges();

        expect(uploadSpy).toHaveBeenCalled();
        expect(onBasicUploaderClickkSpy).toHaveBeenCalled();
    });

    it('should accept all of multiple given MIME types', () => {
        const mockFile1 = { type: 'application/pdf', name: 'test.pdf' };
        const mockFile2 = { type: 'image/png', name: 'test.png' };

        fileupload.accept = 'application/pdf, image/png';
        expect((fileupload as any).isFileTypeValid(mockFile1)).toBe(true);
        expect((fileupload as any).isFileTypeValid(mockFile2)).toBe(true);
    });

    it('should handle wildcards in MIME subtypes', () => {
        const mockFile1 = { type: 'application/pdf', name: 'test.pdf' };
        const mockFile2 = { type: 'image/png', name: 'test.png' };

        fileupload.accept = 'image/*';
        expect((fileupload as any).isFileTypeValid(mockFile1)).toBe(false);
        expect((fileupload as any).isFileTypeValid(mockFile2)).toBe(true);
    });
});
