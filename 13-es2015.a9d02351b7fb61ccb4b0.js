(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ON34:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var o=n("mrSG"),c=n("iInd"),i=n("pLZG"),r=n("Zy1z"),l=n("IheW"),a=n("8Y7J"),s=n("L6Pg"),d=n("mb36"),b=n("yoZy"),u=n("Dde4"),g=n("EApP"),p=n("LqlI"),h=n("s7LF"),m=n("wTG2"),S=n("SVse"),v=n("a3+x"),f=n("G0yt");function R(e,t){if(1&e&&(a.Sb(0,"td"),a.Nb(1,"img",38),a.Rb()),2&e){const e=a.hc().$implicit;a.zb(1),a.nc("src",null==e?null:e.images,a.Bc)}}function y(e,t){if(1&e&&(a.Sb(0,"td"),a.Nb(1,"img",38),a.Rb()),2&e){const e=a.hc().$implicit;a.zb(1),a.nc("src",null==e?null:e.images[0],a.Bc)}}function I(e,t){if(1&e){const e=a.Tb();a.Sb(0,"td",39),a.Sb(1,"button",40),a.dc("confirm",(function(){a.zc(e);const t=a.hc().$implicit;return a.hc(2).onApproved(t,!0)}))("cancel",(function(){return a.zc(e),a.hc(3).cancelClicked=!0})),a.Lc(2," Approve "),a.Rb(),a.Rb()}if(2&e){const e=a.hc(3);a.zb(1),a.mc("popoverTitle",e.popoverTitle)("popoverMessage",e.popoverApproveMessage)}}function M(e,t){if(1&e){const e=a.Tb();a.Sb(0,"td",39),a.Sb(1,"button",41),a.dc("confirm",(function(){a.zc(e);const t=a.hc().$implicit;return a.hc(2).onApproved(t,!1)}))("cancel",(function(){return a.zc(e),a.hc(3).cancelClicked=!0})),a.Lc(2," Disapprove "),a.Rb(),a.Rb()}if(2&e){const e=a.hc(3);a.zb(1),a.mc("popoverTitle",e.popoverTitle)("popoverMessage",e.popoverUnapproveMessage)}}const C=function(e){return{"background-color":e}},P=function(e){return["add",e]},z=function(e,t,n,o,c){return{status:e,category:t,brand:n,action:o,productId:c}};function L(e,t){if(1&e){const e=a.Tb();a.Sb(0,"tr",28),a.Jc(1,R,2,1,"td",29),a.Jc(2,y,2,1,"td",29),a.Sb(3,"td",30),a.Lc(4),a.Rb(),a.Sb(5,"td",31),a.Lc(6),a.Rb(),a.Sb(7,"td"),a.Lc(8),a.Rb(),a.Sb(9,"td"),a.Lc(10),a.Rb(),a.Sb(11,"td"),a.Lc(12),a.Rb(),a.Sb(13,"td"),a.Lc(14),a.Rb(),a.Sb(15,"td"),a.Sb(16,"button",32),a.dc("click",(function(){a.zc(e);const n=t.$implicit,o=a.hc(2),c=a.wc(37);return o.openModal(c,n)})),a.Lc(17," More Details "),a.Rb(),a.Rb(),a.Jc(18,I,3,2,"td",33),a.Jc(19,M,3,2,"td",33),a.Sb(20,"td"),a.Sb(21,"a",34),a.Sb(22,"i",35),a.Lc(23,"\ue254"),a.Rb(),a.Rb(),a.Rb(),a.Sb(24,"td",36),a.Sb(25,"button",37),a.dc("confirm",(function(){a.zc(e);const n=t.$implicit;return a.hc(2).onRemoveProduct(n)}))("cancel",(function(){return a.zc(e),a.hc(2).cancelClicked=!0})),a.Sb(26,"i",35),a.Lc(27,"\ue872"),a.Rb(),a.Rb(),a.Rb(),a.Rb()}if(2&e){const e=t.$implicit,n=a.hc(2);a.mc("ngStyle",a.qc(16,C,n.isProductOperated(null==e?null:e.id,null==e?null:e.approved))),a.zb(1),a.mc("ngIf",1==(null==e||null==e.images?null:e.images.length)),a.zb(1),a.mc("ngIf",(null==e||null==e.images?null:e.images.length)>1),a.zb(1),a.mc("routerLink",a.qc(18,P,null==e?null:e.id)),a.zb(1),a.Nc(" ",null==e?null:e.name," "),a.zb(2),a.Mc(null==e?null:e.category_names),a.zb(2),a.Mc(null==e?null:e.brand_name),a.zb(2),a.Mc(null==e?null:e.weight),a.zb(2),a.Mc(null!=e&&e.frozen_item?"Frozen":"Unfrozen"),a.zb(2),a.Mc(null!=e&&e.approved?"Approved":"Unapproved"),a.zb(4),a.mc("ngIf",!(null!=e&&e.approved)),a.zb(1),a.mc("ngIf",null==e?null:e.approved),a.zb(2),a.mc("routerLink",a.qc(20,P,null==e?null:e.id))("queryParams",a.uc(22,z,n.selectedStatus,n.selectedCategoryId,n.selectedBandId,n.selectedAction,null==e?null:e.id)),a.zb(4),a.mc("popoverTitle",n.popoverTitle)("popoverMessage",n.popoverMessage)}}function _(e,t){if(1&e&&(a.Sb(0,"div",24),a.Sb(1,"table",25),a.Sb(2,"thead",26),a.Sb(3,"tr"),a.Sb(4,"th"),a.Lc(5," Image "),a.Rb(),a.Sb(6,"th"),a.Lc(7," Name "),a.Rb(),a.Sb(8,"th"),a.Lc(9," Category "),a.Rb(),a.Sb(10,"th"),a.Lc(11," Brand "),a.Rb(),a.Sb(12,"th"),a.Lc(13," Weight "),a.Rb(),a.Sb(14,"th"),a.Lc(15," Is Frozen "),a.Rb(),a.Sb(16,"th"),a.Lc(17," Status "),a.Rb(),a.Sb(18,"th"),a.Lc(19," View "),a.Rb(),a.Sb(20,"th"),a.Lc(21," Action "),a.Rb(),a.Sb(22,"th"),a.Lc(23," Update "),a.Rb(),a.Sb(24,"th"),a.Lc(25," Delete "),a.Rb(),a.Rb(),a.Rb(),a.Sb(26,"tbody"),a.Jc(27,L,28,28,"tr",27),a.Rb(),a.Rb(),a.Rb()),2&e){const e=a.hc();a.zb(27),a.mc("ngForOf",null==e.products?null:e.products.content)}}function O(e,t){1&e&&(a.Sb(0,"div",0),a.Sb(1,"div",42),a.Sb(2,"div",43),a.Sb(3,"div",44),a.Sb(4,"span",45),a.Lc(5,"Loading..."),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb())}function T(e,t){1&e&&(a.Sb(0,"div",0),a.Sb(1,"div",42),a.Sb(2,"div",46),a.Nb(3,"img",47),a.Rb(),a.Rb(),a.Rb())}function A(e,t){if(1&e){const e=a.Tb();a.Sb(0,"div",48),a.Sb(1,"div",2),a.Sb(2,"div",49),a.Sb(3,"ngb-pagination",50),a.dc("pageChange",(function(t){return a.zc(e),a.hc().page=t}))("pageChange",(function(t){return a.zc(e),a.hc().onPaginateChange(t)})),a.Rb(),a.Rb(),a.Rb(),a.Rb()}if(2&e){const e=a.hc();a.zb(3),a.mc("collectionSize",e.totalElements)("pageSize",e.size)("page",e.page)("maxSize",6)}}function k(e,t){if(1&e&&(a.Sb(0,"div"),a.Nb(1,"img",38),a.Rb()),2&e){const e=a.hc(2);a.zb(1),a.nc("src",null==e.iProduct?null:e.iProduct.images,a.Bc)}}function B(e,t){if(1&e&&(a.Sb(0,"div"),a.Nb(1,"img",38),a.Rb()),2&e){const e=a.hc(2);a.zb(1),a.nc("src",null==e.iProduct?null:e.iProduct.images[0],a.Bc)}}function w(e,t){if(1&e){const e=a.Tb();a.Sb(0,"div",51),a.Sb(1,"h4",52),a.Lc(2),a.Rb(),a.Sb(3,"button",53),a.dc("click",(function(){return a.zc(e),a.hc().modalRef.hide()})),a.Sb(4,"span",54),a.Lc(5,"\xd7"),a.Rb(),a.Rb(),a.Rb(),a.Sb(6,"div",55),a.Sb(7,"div",56),a.Sb(8,"div",0),a.Sb(9,"div",42),a.Jc(10,k,2,1,"div",29),a.Jc(11,B,2,1,"div",29),a.Rb(),a.Sb(12,"div",57),a.Sb(13,"p"),a.Sb(14,"span",58),a.Lc(15,"Name: "),a.Rb(),a.Lc(16),a.Rb(),a.Sb(17,"p"),a.Sb(18,"span",58),a.Lc(19,"Category: "),a.Rb(),a.Lc(20),a.Rb(),a.Sb(21,"p"),a.Sb(22,"span",58),a.Lc(23,"Brand: "),a.Rb(),a.Lc(24),a.Rb(),a.Sb(25,"p"),a.Sb(26,"span",58),a.Lc(27,"Current Status: "),a.Rb(),a.Lc(28),a.Rb(),a.Sb(29,"p"),a.Sb(30,"span",58),a.Lc(31,"Description: "),a.Rb(),a.Lc(32),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb()}if(2&e){const e=a.hc();a.zb(2),a.Nc("Product Details of ",null==e.iProduct?null:e.iProduct.name,""),a.zb(8),a.mc("ngIf",1==(null==e.iProduct||null==e.iProduct.images?null:e.iProduct.images.length)),a.zb(1),a.mc("ngIf",(null==e.iProduct||null==e.iProduct.images?null:e.iProduct.images.length)>1),a.zb(5),a.Mc(null==e.iProduct?null:e.iProduct.name),a.zb(4),a.Mc(null==e.iProduct?null:e.iProduct.category_names),a.zb(4),a.Mc(null==e.iProduct?null:e.iProduct.brand_name),a.zb(4),a.Nc("",null!=e.iProduct&&e.iProduct.approved?"Approved":"Unapproved"," "),a.zb(4),a.Mc(null==e.iProduct?null:e.iProduct.description)}}let E=(()=>{class e{constructor(e,t,n,o,c,i,r,l){this.productsService=e,this.baseService=t,this.brandsService=n,this.categoryService=o,this.toastr=c,this.modalService=i,this.activatedRoute=r,this.router=l,this.loading=!0,this.size=10,this.page=1,this.search_key="",this.popoverTitle="Are you sure?",this.popoverMessage="Are you really sure you want to delete this?",this.popoverApproveMessage="Are you really sure you want to approved this?",this.popoverUnapproveMessage="Are you really sure you want to unapproved this?",this.cancelClicked=!1,this.actions=[{value:"ADD_TO_CART",name:"ADD TO CART"},{value:"APPLY",name:"APPLY"},{value:"VISIT_LINK",name:"VISIT LINK"},{value:"ORDER",name:"ORDER"},{value:"CONTACT",name:"CONTACT"}],this.statusList=[{id:1,name:"Approved",value:!0},{id:2,name:"Unapproved",value:!1}],this.brands={},this.brandsBuffer=[],this.selectedBandId=null,this.categories={},this.categoryBuffer=[],this.selectedCategoryId=null,this.selectedAction=null,this.isParamAvailable=!1,this.activatedRoute.snapshot.paramMap.get("id")&&(this.selectedCategoryId=Number(this.activatedRoute.snapshot.paramMap.get("id")),this.isParamAvailable=!0)}ngOnInit(){this.retrieveFilteredData().then(e=>{this.page=this.activatedRoute.snapshot.paramMap.get("page")?Number(this.activatedRoute.snapshot.paramMap.get("page")):1,this.onClickGo(),this.get_brands(0,10),this.get_categories(0,10)})}onClickGo(){this.get_products(this.page-1,this.size,this.selectedStatus,this.selectedBandId,this.selectedCategoryId,this.selectedAction)}get_products(e,t,n,o,c,i,r=this.search_key){this.loading=!0,this.totalElements=null,this.productsService.get_products(e,t,n,o,c,i,r).subscribe(e=>{var t;this.products=e,this.loading=!1,this.totalElements=null===(t=this.products)||void 0===t?void 0:t.totalElements},e=>{this.products=null,this.loading=!1,this.totalElements=null,this.baseService.handleError(e)})}onPaginateChange(e){this.router.navigate(["/products",{page:e}]),this.get_products(this.page-1,this.size,this.selectedStatus,this.selectedBandId,this.selectedCategoryId,this.selectedAction)}_searchProduct(e){""==e&&this.get_products(this.page-1,this.size,this.selectedStatus,this.selectedBandId,this.selectedCategoryId,this.selectedAction)}onRemoveProduct(e){this.productsService.remove_products(e.id).subscribe(e=>{this.toastr.success("Deleted Successfully!",""),this.ngOnInit()},e=>{this.baseService.handleError(e)})}openModal(e,t){this.iProduct=t,this.modalRef=this.modalService.show(e)}onApproved(e,t){this.productsService.approved_product(e.id,t).subscribe(e=>{this.toastr.success("Approved Product Successfully!",""),this.ngOnInit()},e=>{this.baseService.handleError(e)})}get_brands(e,t){this.brandsService.get_brands(e,t).subscribe(e=>{this.brands=e,this.brandsBuffer=null==e?void 0:e.content})}onScrollBrandToEnd(){var e;(null===(e=this.brands)||void 0===e?void 0:e.totalElements)>this.brandsBuffer.length&&this.get_brands(0,this.brandsBuffer.length+10)}onSearchBrand(e){var t,n;(null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value.length)>2&&(this.brands=null,this.brandsBuffer=[],this.brandsService.search_brands(e.target.value).subscribe(e=>{this.brands=e,this.brandsBuffer=null==e?void 0:e.content})),""==(null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.value)&&(this.brands=null,this.brandsBuffer=[],this.get_brands(0,10))}get_categories(e,t){this.categoryService.get_category(e,t).subscribe(e=>{this.categories=e,this.categoryBuffer=null==e?void 0:e.content})}onScrollCategoryToEnd(){var e;(null===(e=this.categories)||void 0===e?void 0:e.totalElements)>this.categoryBuffer.length&&this.get_categories(0,this.categoryBuffer.length+10)}onSearchCategory(e){var t,n;(null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value.length)>2&&(this.categories=null,this.categoryBuffer=[],this.categoryService.search_category(e.target.value).subscribe(e=>{this.categories=e,this.categoryBuffer=null==e?void 0:e.content})),""==(null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.value)&&(this.categories=null,this.categoryBuffer=[],this.get_categories(0,10))}onStatusChange(e,t){null!=e||null!=e?("status"==t&&localStorage.setItem(t,this.selectedStatus),"action"==t&&localStorage.setItem(t,this.selectedAction),"brand"==t&&localStorage.setItem(t,this.selectedBandId),"category"==t&&localStorage.setItem(t,this.selectedCategoryId)):localStorage.removeItem(t)}retrieveFilteredData(){return Object(o.a)(this,void 0,void 0,(function*(){this.router.events.pipe(Object(i.a)(e=>e instanceof c.l),Object(r.a)()).subscribe(e=>{let t=e[0].urlAfterRedirects.split("?");if(t.length>=2){const e=new l.d({fromString:t[1]});e.get("status")&&localStorage.setItem("status",e.get("status")),e.get("action")&&localStorage.setItem("action",e.get("action")),e.get("category")&&localStorage.setItem("category",e.get("category")),e.get("brand")&&localStorage.setItem("brand",e.get("brand")),e.get("productId")&&localStorage.setItem("productId",e.get("productId"))}}),localStorage.getItem("status")&&(this.selectedStatus=Boolean(localStorage.getItem("status")),localStorage.removeItem("status")),localStorage.getItem("action")&&(this.selectedAction=localStorage.getItem("action"),localStorage.removeItem("action")),localStorage.getItem("category")&&(this.selectedCategoryId=Number(localStorage.getItem("category")),localStorage.removeItem("category")),localStorage.getItem("brand")&&(this.selectedBandId=Number(localStorage.getItem("brand")),localStorage.removeItem("brand")),localStorage.getItem("productId")&&(this.selectedProductId=Number(localStorage.getItem("productId")),localStorage.removeItem("productId"))}))}isProductOperated(e,t){return e==this.selectedProductId?"#80ff80":t?void 0:"#ff8566"}}return e.\u0275fac=function(t){return new(t||e)(a.Mb(s.a),a.Mb(d.a),a.Mb(b.a),a.Mb(u.a),a.Mb(g.b),a.Mb(p.a),a.Mb(c.a),a.Mb(c.f))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-product-list"]],decls:38,vars:24,consts:[[1,"row"],[1,"col-lg-12","grid-margin","stretch-card","mb-0"],[1,"card"],[1,"card-body"],[1,"card-title","row"],[1,"col-md-4"],["type","button","routerLink","add",1,"btn","btn-gradient-success","btn-rounded","btn-fw","btn-sm"],[1,"form-group"],[1,"input-group"],["type","text","placeholder","Search Product","aria-label","search product",1,"form-control",3,"ngModel","ngModelChange","keyup.enter","input"],[1,"input-group-append"],["type","button",1,"btn","btn-sm","btn-gradient-primary",3,"click"],[1,"col-md-3"],[1,"form-group","mb-0"],["bindValue","value","bindLabel","name","placeholder","Select Status",3,"items","selectOnTab","hideSelected","ngModel","ngModelChange"],["bindValue","id","bindLabel","name","placeholder","Select Brand","appendTo","body",3,"items","selectOnTab","hideSelected","virtualScroll","ngModel","ngModelChange","scrollToEnd","input"],["bindValue","id","bindLabel","name","placeholder","Select Category","appendTo","body",3,"items","selectOnTab","hideSelected","virtualScroll","ngModel","disabled","ngModelChange","scrollToEnd","input"],["bindValue","value","bindLabel","name","placeholder","Select Action",3,"items","selectOnTab","hideSelected","ngModel","ngModelChange"],["type","button",1,"btn","btn-secondary","btn-block","active","btn-sm","mt-2",3,"click"],[1,"fa","fa-arrow-right"],["class","table-responsive pt-3",4,"ngIf"],["class","row",4,"ngIf"],["class","col-lg-12 grid-margin stretch-card",4,"ngIf"],["template",""],[1,"table-responsive","pt-3"],[1,"table","table-striped","table-bordered"],[1,"thead-dark"],[3,"ngStyle",4,"ngFor","ngForOf"],[3,"ngStyle"],[4,"ngIf"],[1,"name",3,"routerLink"],[1,"category"],["type","button",1,"btn","btn-dark","btn-sm",3,"click"],["class","",4,"ngIf"],["title","Edit","data-toggle","tooltip",1,"edit",3,"routerLink","queryParams"],[1,"material-icons"],[1,"p-0"],["mwlConfirmationPopover","","placement","left",1,"btn","delete",3,"popoverTitle","popoverMessage","confirm","cancel"],["alt","no images","width","100%","height","auto",1,"img-fluid",3,"src"],[1,""],["mwlConfirmationPopover","","placement","left",1,"btn","approve","btn-block",3,"popoverTitle","popoverMessage","confirm","cancel"],["mwlConfirmationPopover","","placement","left",1,"btn","disapprove","btn-block",3,"popoverTitle","popoverMessage","confirm","cancel"],[1,"col-12"],[1,"d-flex","justify-content-center"],["role","status",1,"spinner-border","m-5",2,"width","3rem","height","3rem"],[1,"sr-only"],[1,"text-center"],["src","./assets/icon/nodatafound.jpg","alt","not found image",1,"rounded",2,"width","400px","height","300px"],[1,"col-lg-12","grid-margin","stretch-card"],[1,"card-body","pt-0"],["aria-label","Default pagination",1,"d-flex","justify-content-center",3,"collectionSize","pageSize","page","maxSize","pageChange"],[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"close","pull-right",3,"click"],["aria-hidden","true"],[1,"modal-body","py-0"],[1,"containers-fluid"],[1,"col-12","pt-3"],[1,"font-weight-bold"]],template:function(e,t){1&e&&(a.Sb(0,"div",0),a.Sb(1,"div",1),a.Sb(2,"div",2),a.Sb(3,"div",3),a.Sb(4,"div",4),a.Sb(5,"div",5),a.Sb(6,"button",6),a.Lc(7,"Add Product "),a.Rb(),a.Rb(),a.Sb(8,"div",5),a.Sb(9,"h2"),a.Lc(10,"Products"),a.Rb(),a.Rb(),a.Sb(11,"div",5),a.Sb(12,"div",7),a.Sb(13,"div",8),a.Sb(14,"input",9),a.dc("ngModelChange",(function(e){return t.search_key=e}))("keyup.enter",(function(){return t.onClickGo()}))("input",(function(e){return t._searchProduct(e.target.value)})),a.Rb(),a.Sb(15,"div",10),a.Sb(16,"button",11),a.dc("click",(function(){return t.onClickGo()})),a.Lc(17,"Search "),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(18,"div",0),a.Sb(19,"div",12),a.Sb(20,"div",13),a.Sb(21,"ng-select",14),a.dc("ngModelChange",(function(e){return t.selectedStatus=e})),a.Rb(),a.Rb(),a.Rb(),a.Sb(22,"div",12),a.Sb(23,"ng-select",15),a.dc("ngModelChange",(function(e){return t.selectedBandId=e}))("scrollToEnd",(function(){return t.onScrollBrandToEnd()}))("input",(function(e){return t.onSearchBrand(e)})),a.Rb(),a.Rb(),a.Sb(24,"div",12),a.Sb(25,"ng-select",16),a.dc("ngModelChange",(function(e){return t.selectedCategoryId=e}))("scrollToEnd",(function(){return t.onScrollCategoryToEnd()}))("input",(function(e){return t.onSearchCategory(e)})),a.Rb(),a.Rb(),a.Sb(26,"div",12),a.Sb(27,"div",7),a.Sb(28,"ng-select",17),a.dc("ngModelChange",(function(e){return t.selectedAction=e})),a.Rb(),a.Rb(),a.Sb(29,"button",18),a.dc("click",(function(){return t.onClickGo()})),a.Nb(30,"i",19),a.Lc(31," Go "),a.Rb(),a.Rb(),a.Rb(),a.Jc(32,_,28,1,"div",20),a.Jc(33,O,6,0,"div",21),a.Jc(34,T,4,0,"div",21),a.Rb(),a.Rb(),a.Rb(),a.Jc(35,A,4,4,"div",22),a.Rb(),a.Jc(36,w,33,8,"ng-template",null,23,a.Kc)),2&e&&(a.zb(14),a.mc("ngModel",t.search_key),a.zb(7),a.mc("items",t.statusList)("selectOnTab",!0)("hideSelected",!0)("ngModel",t.selectedStatus),a.zb(2),a.mc("items",t.brandsBuffer)("selectOnTab",!0)("hideSelected",!0)("virtualScroll",!0)("ngModel",t.selectedBandId),a.zb(2),a.mc("items",t.categoryBuffer)("selectOnTab",!0)("hideSelected",!0)("virtualScroll",!0)("ngModel",t.selectedCategoryId)("disabled",t.isParamAvailable),a.zb(3),a.mc("items",t.actions)("selectOnTab",!0)("hideSelected",!0)("ngModel",t.selectedAction),a.zb(4),a.mc("ngIf",0==t.loading),a.zb(1),a.mc("ngIf",1==t.loading),a.zb(1),a.mc("ngIf",0==(null==t.products?null:t.products.totalElements)),a.zb(1),a.mc("ngIf",t.totalElements))},directives:[c.g,h.c,h.n,h.q,m.a,S.m,S.l,S.n,c.i,v.a,f.j],styles:[".card[_ngcontent-%COMP%]{border-radius:0}h2[_ngcontent-%COMP%]{font-size:26px;font-width:900}table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.edit[_ngcontent-%COMP%]{color:#ffc107;cursor:pointer}table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button.delete[_ngcontent-%COMP%]{color:#e34724;cursor:pointer}table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button.approve[_ngcontent-%COMP%]{color:#fff;background-color:#0f7062;cursor:pointer;padding:.5rem}table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button.disapprove[_ngcontent-%COMP%]{color:#fff;background-color:#ca371d;cursor:pointer;padding:.5rem}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{font-size:.785rem!important}.name[_ngcontent-%COMP%]{cursor:pointer;color:#0b7dda;line-height:1.2}"]}),e})()}}]);