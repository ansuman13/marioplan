(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{215:function(e,t,a){e.exports=a(409)},220:function(e,t,a){},409:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a(0),c=a.n(r),l=a(91),i=a.n(l),o=(a(220),a(8)),s=a(31),u=a(6),m=Object(u.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){return e({type:"SIGNOUT_SUCCESS"})})).catch((function(t){e("SIGNOUT_ERROR",t)}))}))}}}))((function(e){return c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(o.c,{to:"/create"},"Create")),c.a.createElement("li",null,c.a.createElement("a",{onClick:e.signOut},"Logout")),c.a.createElement("li",null,c.a.createElement("span",{className:"btn btn-floating pink lighten-1"},e.profile.initials)))})),p=function(){return c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(o.c,{to:"/signup"},"SignUp")),c.a.createElement("li",null,c.a.createElement(o.c,{to:"/login"},"Login")))},d=Object(u.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile;console.log(a);var n=t.uid?c.a.createElement(m,{profile:a}):c.a.createElement(p,null);return c.a.createElement("nav",{className:"nav-wrapper grey darken-3"},c.a.createElement("div",{className:"container"},c.a.createElement(o.b,{to:"/",className:"brand-logo"},"MarioPlan"),t.isLoaded&&n))})),h=a(27),E=a(28),f=a(29),b=a(30),g=a(52),N=a.n(g),j=function(e){var t=e.notifications;return c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"card z-depth-0"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title center"},"Notifications"),c.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("span",{className:"pink-text"},e.user),c.a.createElement("span",null," ",e.content),c.a.createElement("div",{className:"grey-text note-date"},N()(e.time.toDate()).fromNow()))}))))))},v=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card z-depth-0 project-summary"},c.a.createElement("div",{className:"card-content grey-text text-darken-3"},c.a.createElement("span",{className:"card-title"},e.project.title),c.a.createElement("p",null,"Posted by ",e.project.authorFirstName," ",e.project.authorLastName),c.a.createElement("p",{className:"grey-text"},N()(e.project.createdAt.toDate()).calendar()))))},O=function(e){return c.a.createElement("div",{className:"project-list section"},e.projects&&e.projects.map((function(e){return c.a.createElement(o.b,{to:"/project/"+e.id,key:e.id},c.a.createElement(v,{project:e}))})))},y=a(15),C=a(25),S=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){var e=this.props,t=(e.projects,e.auth),a=e.notifications;return t.uid?c.a.createElement("div",{className:"dashboad container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m6"},c.a.createElement(O,{projects:this.props.projects})),c.a.createElement("div",{className:"col s12 m5 offset-m1"},c.a.createElement(j,{notifications:a})))):c.a.createElement(s.a,{to:"/login"})}}]),a}(c.a.Component),R=Object(y.d)(Object(u.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(C.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(S),w=a(53),F=Object(y.d)(Object(u.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null}}),(function(e){return{deletePost:function(t){return e(function(e){return function(t,a,n){return(0,n.getFirestore)().collection("projects").doc(e).delete(),t({type:"DELETE_POST",projectId:e})}}(t))}}})),Object(C.firestoreConnect)([{collection:"projects"}]))((function(e){console.log(e);return e.project?c.a.createElement("div",{className:"project-details section container"},c.a.createElement("div",{className:"card z-depth-0"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},e.project.title),c.a.createElement("p",null,e.project.content)),c.a.createElement("div",{className:"card-action grey-text"},c.a.createElement("p",null,"Posted by ",e.project.authorFirstName," ",e.project.authorLastName),c.a.createElement("button",{className:"btn red right",onClick:function(){e.history.push("/"),e.deletePost(e.match.params.id)}},"Delete"),c.a.createElement("p",null,N()(e.project.createdAt.toDate()).calendar())))):c.a.createElement("div",{className:"center"},c.a.createElement("p",null,"Loading..."))})),I=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:""},e.submitHandler=function(t){t.preventDefault(),e.props.signIn(e.state)},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e}return Object(E.a)(a,[{key:"render",value:function(){var e=this.props;e.authError;return e.auth.uid?c.a.createElement(s.a,{to:"/"}):c.a.createElement("div",{className:"signin container section"},c.a.createElement("form",{onSubmit:this.submitHandler,className:"white"},c.a.createElement("div",{className:"red-text center"},c.a.createElement("p",null,this.props.authError?"Login Failed":null)),c.a.createElement("h5",null,"Login In"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink"},"Submit"))))}}]),a}(r.Component),P=Object(u.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){var a;e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){return e({type:"LOGIN_SUCCESS"})})).catch((function(t){return e({type:"LOGIN_ERROR",err:t})}))}))}}}))(I),k=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={firstName:"",lastName:"",email:"",password:""},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.props.signUp(e.state)},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e}return Object(E.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?c.a.createElement(s.a,{to:"/"}):c.a.createElement("div",{className:"container"},c.a.createElement("form",{className:"text-grey text-darken-3 white",onSubmit:this.handleSubmit},c.a.createElement("div",{className:"center red-text"},a?c.a.createElement("p",null," ",a.message," "):null),c.a.createElement("h5",{className:"text-grey"},"Sign up"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"FirstName"},"First Name"),c.a.createElement("input",{type:"text",name:"FirstName",id:"firstName",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"LastName"},"Last Name"),c.a.createElement("input",{type:"text",name:"LastName",id:"lastName",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",name:"email",id:"email",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"password"},"password"),c.a.createElement("input",{type:"password",name:"password",id:"password",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{type:"submit",className:"btn pink"},"Submit"))))}}]),a}(r.Component),L=Object(u.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,l=r(),i=c();l.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return i.collection("users").doc(t.user.uid).set({firstname:e.firstName,lastname:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){return t({type:"SIGNUP_SUCCESS"})})).catch((function(e){return t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(k),x=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={title:"",content:""},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e}return Object(E.a)(a,[{key:"render",value:function(){return this.props.auth.uid?c.a.createElement("div",{className:"container"},c.a.createElement("form",{className:"white section",onSubmit:this.handleSubmit},c.a.createElement("h5",null,"Create Project"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"title"},"Title"),c.a.createElement("input",{type:"text",name:"title",id:"title",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"content"},"Content"),c.a.createElement("textarea",{name:"content",id:"content",cols:"30",rows:"10",className:"materialize-textarea",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink z-depth-1"},"Submit")))):c.a.createElement(s.a,{to:"/login"})}}]),a}(r.Component),_=Object(u.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){var r=(0,n.getFirestore)(),c=a().firebase.profile;console.log(c);var l=a().firebase.auth.uid;console.log("testing project reducer",a()),r.collection("projects").add(Object(w.a)({},e,{authorFirstName:c.firstname,authorLastName:c.lastname,authorId:l,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(x);var U=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(d,null),c.a.createElement(s.d,null,c.a.createElement(s.b,{exact:!0,path:"/",component:R}),c.a.createElement(s.b,{path:"/project/:id",component:F}),c.a.createElement(s.b,{path:"/login",component:P}),c.a.createElement(s.b,{path:"/signup",component:L}),c.a.createElement(s.b,{path:"/create",component:_}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T={authError:null},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login failed"),Object(w.a)({},e,{authError:"Login Failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(w.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout successful"),e;case"SIGNOUT_ERROR":return console.log("signout failed"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),e;case"SIGNUP_ERROR":return console.log("signup failed",t.err),Object(w.a)({},e,{authError:t.err});default:return e}},G={projects:[{id:1,title:"Mario plays the piano",content:"blah blah blah"},{id:2,title:"Rio plays the guitar",content:"blah blah blah"},{id:3,title:"Sip plays the bongo",content:"blah blah blah"}]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("post created",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),e;case"DELETE_POST":return console.log("deleted this post",t.projectId),e;default:return e}},z=a(54),B=Object(y.c)({auth:A,project:D,firestore:z.firestoreReducer,firebase:C.firebaseReducer}),J=a(214),H=a(40),W=a.n(H);a(404),a(406),a(410);W.a.initializeApp({apiKey:"AIzaSyBVnNMK_TkoHCneiRpJHaHjmFq1RieCfbo",authDomain:"marioplan-93ca8.firebaseapp.com",databaseURL:"https://marioplan-93ca8.firebaseio.com",projectId:"marioplan-93ca8",storageBucket:"marioplan-93ca8.appspot.com",messagingSenderId:"751329258992",appId:"1:751329258992:web:23f14dabb295fd711f4135",measurementId:"G-N20GL649XQ"}),W.a.firestore().settings({timestampsInSnapshots:!0});var M,K=W.a,q=Object(y.e)(B,Object(y.d)(Object(y.a)(J.a.withExtraArgument({getFirestore:z.getFirestore,getFirebase:C.getFirebase})),Object(z.reduxFirestore)(W.a,K))),Q=(M={firebase:W.a,config:K},Object(n.a)(M,"config",{userProfile:"users",useFirestoreForProfile:!0,enableRedirectHandling:!1,resetBeforeLogin:!1}),Object(n.a)(M,"dispatch",q.dispatch),Object(n.a)(M,"createFirestoreInstance",z.createFirestoreInstance),M);i.a.render(c.a.createElement(u.a,{store:q},c.a.createElement(C.ReactReduxFirebaseProvider,Q,c.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[215,1,2]]]);
//# sourceMappingURL=main.bfa6504f.chunk.js.map