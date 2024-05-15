"use strict";(self.webpackChunkproject_voyage_sur_mesure=self.webpackChunkproject_voyage_sur_mesure||[]).push([[9843],{19843:(Q,C,s)=>{s.d(C,{ProtectedEditPage:()=>Z});var t=s(92132),B=s(21272),r=s(94061),M=s(83997),m=s(30893),h=s(85963),I=s(90151),A=s(68074),g=s(7537),R=s(5287),T=s(38413),U=s(55356),W=s(4198),c=s(21610),o=s(2129),K=s(46270),f=s(61535),p=s(54894),j=s(17703),Y=s(71389),u=s(12083),e=s(43077),$=s(24317),G=s(64410),ns=s(15126),Es=s(63299),rs=s(67014),is=s(59080),ds=s(79275),es=s(14718),ls=s(82437),Ms=s(5790),Ps=s(35223),Ds=s(5409),Os=s(74930),ms=s(2600),hs=s(48940),As=s(41286),gs=s(56336),Rs=s(13426),vs=s(84624),Ls=s(77965),Cs=s(54257),Bs=s(71210),Is=s(51187),Ts=s(39404),Us=s(58692),Ws=s(501),cs=s(57646),Ks=s(23120),fs=s(44414),js=s(25962),us=s(14664),xs=s(42588),ys=s(90325),ps=s(62785),Ss=s(87443),Fs=s(41032),Ns=s(22957),zs=s(93179),Vs=s(73055),Qs=s(15747),Ys=s(85306),$s=s(26509),Gs=s(32058),Hs=s(81185),Xs=s(82261),Js=s(412),Zs=s(94710);const H=({disabled:n,role:a,values:D,errors:_,onChange:i,onBlur:v})=>{const{formatMessage:E}=(0,p.A)();return(0,t.jsx)(r.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(M.s,{justifyContent:"space-between",children:[(0,t.jsxs)(r.a,{children:[(0,t.jsx)(r.a,{children:(0,t.jsx)(m.o,{fontWeight:"bold",children:a?a.name:E({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(r.a,{children:(0,t.jsx)(m.o,{textColor:"neutral500",variant:"pi",children:a?a.description:E({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(h.$,{disabled:!0,variant:"secondary",children:E({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:a.usersCount})})]}),(0,t.jsxs)(I.x,{gap:4,children:[(0,t.jsx)(A.E,{col:6,children:(0,t.jsx)(g.k,{disabled:n,name:"name",error:_.name&&E({id:_.name}),label:E({id:"global.name",defaultMessage:"Name"}),onChange:i,onBlur:v,required:!0,value:D.name||""})}),(0,t.jsx)(A.E,{col:6,children:(0,t.jsx)(R.T,{disabled:n,label:E({id:"global.description",defaultMessage:"Description"}),id:"description",error:_.name&&E({id:_.name}),onChange:i,onBlur:v,children:D.description||""})})]})]})})},X=u.Ik().shape({name:u.Yj().required(o.iW.required),description:u.Yj().optional()}),J=()=>{const n=(0,o.hN)(),{formatMessage:a}=(0,p.A)(),_=(0,j.W5)("/settings/roles/:id")?.params.id,i=B.useRef(null),{lockApp:v,unlockApp:E}=(0,o.MA)(),{trackUsage:b}=(0,o.z1)(),{_unstableFormatAPIError:S,_unstableFormatValidationErrors:F}=(0,o.wq)(),{isLoading:k,data:N}=(0,e.A)({role:_??""}),{roles:w,isLoading:z,refetch:q}=(0,$.u)({id:_},{refetchOnMountOrArgChange:!0}),P=w[0]??{},{data:ss,isLoading:ts}=(0,e.B)({id:_},{skip:!_,refetchOnMountOrArgChange:!0}),[_s]=(0,e.G)(),[as]=(0,e.E)();if(!_)return(0,t.jsx)(j.rd,{to:"/settings/roles"});const os=async(x,L)=>{try{v();const{permissionsToSend:O,didUpdateConditions:y}=i.current?.getPermissions()??{},d=await _s({id:_,...x});if("error"in d){(0,e.x)(d.error)&&d.error.name==="ValidationError"?L.setErrors(F(d.error)):n({type:"warning",message:S(d.error)});return}if(P.code!=="strapi-super-admin"&&O){const l=await as({id:d.data.id,permissions:O});if("error"in l){(0,e.x)(l.error)&&l.error.name==="ValidationError"?L.setErrors(F(l.error)):n({type:"warning",message:S(l.error)});return}y&&b("didUpdateConditions")}i.current?.setFormAfterSubmit(),await q(),n({type:"success",message:{id:"notification.success.saved"}})}catch{n({type:"warning",message:{id:"notification.error"}})}finally{E()}},V=!z&&P.code==="strapi-super-admin";return(0,t.jsxs)(T.g,{children:[(0,t.jsx)(o.x7,{name:"Roles"}),(0,t.jsx)(f.l1,{enableReinitialize:!0,initialValues:{name:P.name??"",description:P.description??""},onSubmit:os,validationSchema:X,validateOnChange:!1,children:({handleSubmit:x,values:L,errors:O,handleChange:y,handleBlur:d,isSubmitting:l})=>(0,t.jsxs)("form",{onSubmit:x,children:[(0,t.jsx)(U.Q,{primaryAction:(0,t.jsx)(M.s,{gap:2,children:(0,t.jsx)(h.$,{type:"submit",disabled:P.code==="strapi-super-admin",loading:l,size:"L",children:a({id:"global.save",defaultMessage:"Save"})})}),title:a({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:a({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(c.N,{as:Y.k2,startIcon:(0,t.jsx)(K.A,{}),to:"/settings/roles",children:a({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(W.s,{children:(0,t.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(H,{disabled:V,errors:O,values:L,onChange:y,onBlur:d,role:P}),!k&&!z&&!ts&&N?(0,t.jsx)(r.a,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(G.P,{isFormDisabled:V,permissions:ss,ref:i,layout:N})}):(0,t.jsx)(r.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(o.Bl,{})})]})})]})})]})},Z=()=>{const n=(0,e.j)(i=>i.admin_app.permissions.settings?.roles),{isLoading:a,allowedActions:{canRead:D,canUpdate:_}}=(0,o.ec)(n);return a?(0,t.jsx)(o.Bl,{}):!D&&!_?(0,t.jsx)(j.rd,{to:"/"}):(0,t.jsx)(J,{})}},24317:(Q,C,s)=>{s.d(C,{u:()=>m});var t=s(21272),B=s(2129),r=s(54894),M=s(43077);const m=(h={},I)=>{const{locale:A}=(0,r.A)(),g=(0,B.QM)(A,{sensitivity:"base"}),{data:R,error:T,isError:U,isLoading:W,refetch:c}=(0,M.z)(h,I);return{roles:t.useMemo(()=>[...R??[]].sort((K,f)=>g.compare(K.name,f.name)),[R,g]),error:T,isError:U,isLoading:W,refetch:c}}}}]);
