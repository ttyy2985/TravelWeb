(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217a99"],{c84b:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("div",{staticClass:"title-container flex justify-between items-center mb-2"},[i("div",{staticClass:"left flex items-center"},[i("div",{staticClass:"back cursor-pointer",on:{click:function(e){return t.$router.back(-1)}}},[i("icon",{staticClass:"w-6 h-6 mr-2",attrs:{iconName:"ArrowLeft"}})],1),i("h1",{staticClass:"text-2xl font-bold"},[t._v(t._s(t.info.Name))])]),i("div",{staticClass:"icons flex items-center"},[i("icon",{staticClass:"w-5 h-5 mr-4 cursor-pointer",attrs:{iconName:"Print"}}),i("div",{staticClass:"icon cursor-pointer",on:{click:function(e){return t.share()}}},[i("icon",{staticClass:"w-5 h-5",attrs:{iconName:"sharing_green"}})],1)],1)]),i("div",{staticClass:"title-img relative w-full rounded-xl h-233 bg-cover bg-no-repeat bg-center mb-2",style:{backgroundImage:"url("+t.info.Picture.PictureUrl1+")"}}),i("div",{staticClass:"card-content text-left px-4 py-2 mb-2 bg-green-50 bg-opacity-10 rounded-md"},t._l(t.detail,(function(e,s){return i("div",{directives:[{name:"show",rawName:"v-show",value:s,expression:"icon"}],key:s,staticClass:"info flex items-center"},[i("icon",{staticClass:"w-4 h-4 text-green-50 mr-1",attrs:{iconName:s}}),t._v(" "+t._s(e)+" ")],1)})),0),t.info.DescriptionDetail?i("div",{staticClass:"description flex flex-col items-start mb-2"},[i("h4",{staticClass:"font-bold text-green-50 text-lg"},[t._v("景點介紹")]),i("p",{staticClass:"text-left"},[t._v(t._s(t.info.DescriptionDetail))])]):t._e(),t.info.TravelInfo?i("div",{staticClass:"travelInfo flex flex-col items-start mb-2"},[i("h4",{staticClass:"font-bold text-green-50 text-lg"},[t._v("交通方式")]),i("p",{staticClass:"text-left"},[t._v(t._s(t.info.TravelInfo))])]):t._e(),i("ArticleSetion",{attrs:{options:{city:""+(t.info.Address?t.city[t.info.Address.substr(0,3)]:"")},category:"ScenicSpot",subtitle:(t.info.City?t.info.City:"")+"更多景點"},on:{refresh:function(e){t.refresh=!0,t.$route.params.id=e}}})],1)},n=[],o=(i("d3b7"),i("b64b"),i("3f02")),r={name:"Detail",components:{ArticleSetion:o["a"]},data:function(){return{info:{},refresh:!1,city:this.$root.city}},computed:{detail:function(){var t=["Phone","Address","OpenTime","TicketInfo"],e=this;return Object.keys(this.info).reduce((function(i,s){return t.indexOf(s)>-1&&(i[s]=e.info[s]),i}),{})}},mounted:function(){this.info=JSON.parse(sessionStorage.getItem("info"))},watch:{refresh:function(t){t&&(this.info=JSON.parse(sessionStorage.getItem("info")),this.refresh=!t)}},methods:{share:function(){window.open("https://lineit.line.me/share/ui?url=".concat(encodeURIComponent(window.location.href)))}}},a=r,c=i("2877"),l=Object(c["a"])(a,s,n,!1,null,null,null);e["default"]=l.exports}}]);