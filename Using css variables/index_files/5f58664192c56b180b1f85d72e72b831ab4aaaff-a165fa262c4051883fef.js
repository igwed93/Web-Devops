(self.webpackChunk_freecodecamp_client=self.webpackChunk_freecodecamp_client||[]).push([[4615],{37850:function(e,t,n){!function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return s(e)||c(e,t)||l(e,t)||p()}function s(e){if(Array.isArray(e))return e}function c(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return a}}function l(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var d="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function h(){}function f(){}f.resetWarningCache=h;var y=function(){function e(e,t,n,r,o,a){if(a!==d){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:f,resetWarningCache:h};return n.PropTypes=n,n},g=m((function(e){e.exports=y()})),E=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},b=function(e){return null!==e&&"object"===o(e)},v=function(e){return b(e)&&"function"==typeof e.then},S=function(e){return b(e)&&"function"==typeof e.elements&&"function"==typeof e.createToken&&"function"==typeof e.createPaymentMethod&&"function"==typeof e.confirmCardPayment},C="[object Object]",P=function e(t,n){if(!b(t)||!b(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===C;if(o!==(Object.prototype.toString.call(n)===C))return!1;if(!o&&!r)return t===n;var a=Object.keys(t),i=Object.keys(n);if(a.length!==i.length)return!1;for(var s={},c=0;c<a.length;c+=1)s[a[c]]=!0;for(var l=0;l<i.length;l+=1)s[i[l]]=!0;var u=Object.keys(s);if(u.length!==a.length)return!1;var p=t,m=n,d=function(t){return e(p[t],m[t])};return u.every(d)},w=function(e,t,n){return b(e)?Object.keys(e).reduce((function(o,i){var s=!b(t)||!P(e[i],t[i]);return n.includes(i)?(s&&console.warn("Unsupported prop change: options.".concat(i," is not a mutable property.")),o):s?r(r({},o||{}),{},a({},i,e[i])):o}),null):null},k="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",N=function(e){if(null===e||S(e))return e;throw new Error(k)},D=function(e){if(v(e))return{tag:"async",stripePromise:Promise.resolve(e).then(N)};var t=N(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},j=t.createContext(null);j.displayName="ElementsContext";var A=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},M=t.createContext(null);M.displayName="CartElementContext";var x=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},L=function(e){var n=e.stripe,r=e.options,o=e.children,a=t.useMemo((function(){return D(n)}),[n]),s=i(t.useState(null),2),c=s[0],l=s[1],u=i(t.useState(null),2),p=u[0],m=u[1],d=i(t.useState((function(){return{stripe:"sync"===a.tag?a.stripe:null,elements:"sync"===a.tag?a.stripe.elements(r):null}})),2),h=d[0],f=d[1];t.useEffect((function(){var e=!0,t=function(e){f((function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}}))};return"async"!==a.tag||h.stripe?"sync"!==a.tag||h.stripe||t(a.stripe):a.stripePromise.then((function(n){n&&e&&t(n)})),function(){e=!1}}),[a,h,r]);var y=E(n);t.useEffect((function(){null!==y&&y!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[y,n]);var g=E(r);return t.useEffect((function(){if(h.elements){var e=w(r,g,["clientSecret","fonts"]);e&&h.elements.update(e)}}),[r,g,h.elements]),t.useEffect((function(){var e=h.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.16.5"}),e.registerAppInfo({name:"react-stripe-js",version:"1.16.5",url:"https://stripe.com/docs/stripe-js/react"}))}),[h.stripe]),t.createElement(j.Provider,{value:h},t.createElement(M.Provider,{value:{cart:c,setCart:l,cartState:p,setCartState:m}},o))},O=function(e){var n=t.useContext(j);return A(n,e)},F=function(e){var n=t.useContext(M);return x(n,e)},B=function(){return O("calls useElements()").elements},I=function(){return O("calls useStripe()").stripe},T=function(){return F("calls useCartElement()").cart},_=function(){return F("calls useCartElementState()").cartState},R=function(e){return(0,e.children)(O("mounts <ElementsConsumer>"))};R.propTypes={children:g.func.isRequired};var q=function(e,n,r){var o=!!r,a=t.useRef(r);t.useEffect((function(){a.current=r}),[r]),t.useEffect((function(){if(!o||!e)return function(){};var t=function(){a.current&&a.current.apply(a,arguments)};return e.on(n,t),function(){e.off(n,t)}}),[o,n,e,a])},H=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},z=function(e,n){var r="".concat(H(e),"Element"),o=n?function(e){O("mounts <".concat(r,">")),F("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o,a=n.id,s=n.className,c=n.options,l=void 0===c?{}:c,u=n.onBlur,p=n.onFocus,m=n.onReady,d=n.onChange,h=n.onEscape,f=n.onClick,y=n.onLoadError,g=n.onLoaderStart,b=n.onNetworksChange,v=n.onCheckout,S=n.onLineItemClick,C=n.onConfirm,P=n.onCancel,k=n.onShippingAddressChange,N=n.onShippingRateChange,D=O("mounts <".concat(r,">")).elements,j=i(t.useState(null),2),A=j[0],M=j[1],x=t.useRef(null),L=t.useRef(null),B=F("mounts <".concat(r,">")),I=B.setCart,T=B.setCartState;q(A,"blur",u),q(A,"focus",p),q(A,"escape",h),q(A,"click",f),q(A,"loaderror",y),q(A,"loaderstart",g),q(A,"networkschange",b),q(A,"lineitemclick",S),q(A,"confirm",C),q(A,"cancel",P),q(A,"shippingaddresschange",k),q(A,"shippingratechange",N),"cart"===e?o=function(e){T(e),m&&m(e)}:m&&(o="payButton"===e?m:function(){m(A)}),q(A,"ready",o),q(A,"change","cart"===e?function(e){T(e),d&&d(e)}:d),q(A,"checkout","cart"===e?function(e){T(e),v&&v(e)}:v),t.useLayoutEffect((function(){if(null===x.current&&D&&null!==L.current){var t=D.create(e,l);"cart"===e&&I&&I(t),x.current=t,M(t),t.mount(L.current)}}),[D,l,I]);var _=E(l);return t.useEffect((function(){if(x.current){var e=w(l,_,["paymentRequest"]);e&&x.current.update(e)}}),[l,_]),t.useLayoutEffect((function(){return function(){x.current&&(x.current.destroy(),x.current=null)}}),[]),t.createElement("div",{id:a,className:s,ref:L})};return o.propTypes={id:g.string,className:g.string,onChange:g.func,onBlur:g.func,onFocus:g.func,onReady:g.func,onEscape:g.func,onClick:g.func,onLoadError:g.func,onLoaderStart:g.func,onNetworksChange:g.func,onCheckout:g.func,onLineItemClick:g.func,onConfirm:g.func,onCancel:g.func,onShippingAddressChange:g.func,onShippingRateChange:g.func,options:g.object},o.displayName=r,o.__elementType=e,o},U="undefined"==typeof window,V=z("auBankAccount",U),W=z("card",U),$=z("cardNumber",U),Z=z("cardExpiry",U),X=z("cardCvc",U),G=z("fpxBank",U),J=z("iban",U),Y=z("idealBank",U),K=z("p24Bank",U),Q=z("epsBank",U),ee=z("payment",U),te=z("payButton",U),ne=z("paymentRequestButton",U),re=z("linkAuthentication",U),oe=z("address",U),ae=z("shippingAddress",U),ie=z("cart",U),se=z("paymentMethodMessaging",U),ce=z("affirmMessage",U),le=z("afterpayClearpayMessage",U);e.AddressElement=oe,e.AffirmMessageElement=ce,e.AfterpayClearpayMessageElement=le,e.AuBankAccountElement=V,e.CardCvcElement=X,e.CardElement=W,e.CardExpiryElement=Z,e.CardNumberElement=$,e.CartElement=ie,e.Elements=L,e.ElementsConsumer=R,e.EpsBankElement=Q,e.FpxBankElement=G,e.IbanElement=J,e.IdealBankElement=Y,e.LinkAuthenticationElement=re,e.P24BankElement=K,e.PayButtonElement=te,e.PaymentElement=ee,e.PaymentMethodMessagingElement=se,e.PaymentRequestButtonElement=ne,e.ShippingAddressElement=ae,e.useCartElement=T,e.useCartElementState=_,e.useElements=B,e.useStripe=I,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(37711))},16367:function(e,t,n){"use strict";n.d(t,{Z:function(){return ce}});n(15752);var r=n(37711),o=n(76217),a=n.n(o),i=n(23278),s=n(25497),c=n(81636),l=n(99042);const u=e=>Intl.NumberFormat("en-US").format(e),p=e=>u(e/100);var m=n(48185),d=n(95217),h=n.n(d),f=n(90147),y=n(37271),g=n(22126),E=n(47307),b=n(88919);function v(e){let{processing:t,reset:n,success:o,redirecting:l,isSignedIn:u,error:p=null}=e;const{t:m}=(0,s.$G)(),d=t||l?"info":o?"success":"danger",f=l?""+m("donate.redirecting"):t?""+m("donate.processing"):o?""+m("donate.thank-you"):""+m("donate.error");return r.createElement(i.bZ,{variant:d,className:"donation-completion"},r.createElement("b",null,f),r.createElement(c.LZ,{size:"medium"}),r.createElement("div",{className:"donation-completion-body"},(t||l)&&r.createElement(h(),{className:"user-state-spinner",color:"#0a0a23",fadeIn:"none",name:"line-scale"}),o&&r.createElement("div",null,r.createElement("p",null,m("donate.free-tech")),u&&r.createElement("p",null,m("donate.no-halo"))),p&&r.createElement("p",null,p)),r.createElement("div",{className:"donation-completion-buttons"},p&&r.createElement("div",null,r.createElement(a(),{bsStyle:"primary",onClick:n},m("buttons.try-again")))))}v.displayName="DonateCompletion";var S=v,C=n(90048);const P=e=>r.createElement("svg",Object.assign({id:"patreon-logo",viewBox:"10 0 2560 356",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",role:"img","aria-labelledby":"patreon-logo-label"},e),r.createElement("title",{id:"patreon-logo-label"},"Patreon"),r.createElement("g",null,r.createElement("path",{d:"M1536.54 72.449v76.933h128.24v61.473h-128.24v74.51h128.24v62.921h-206.64V9.529h206.64v62.92h-128.24M2070.82 178.907c0-55.652-37.76-107.434-99.21-107.434-61.95 0-99.21 51.782-99.21 107.434s37.26 107.435 99.21 107.435c61.45 0 99.21-51.783 99.21-107.435zm-278.77 0c0-92.916 66.79-178.093 179.56-178.093 112.26 0 179.05 85.177 179.05 178.093 0 92.916-66.79 178.093-179.05 178.093-112.77 0-179.56-85.177-179.56-178.093zM186.32 131.97c0-31.46-21.299-58.563-54.206-58.563H78.398v117.109h53.716c32.907 0 54.206-27.086 54.206-58.546zM0 9.529h141.788c75.016 0 123.417 56.628 123.417 122.441s-48.401 122.423-123.417 122.423h-63.39v93.893H0V9.529zM492.17 106.314l-41.621 139.382h82.266L492.17 106.314zm73.081 241.972-13.054-41.134H431.69l-13.072 41.134h-83.73L455.882 9.529h72.105l122.442 338.757h-85.178zM782.055 77.277H705.61V9.529h231.793v67.748h-76.951v271.009h-78.397V77.277M2485.08 230.202V9.529h77.91v338.757h-81.78l-121.97-217.78v217.78h-78.4V9.529h81.78l122.46 220.673M1245.68 131.97c0-31.46-21.3-58.563-54.21-58.563h-53.72v117.109h53.72c32.91 0 54.21-27.086 54.21-58.546zM1059.36 9.529h142.29c75 0 123.4 56.628 123.4 122.441 0 47.425-25.17 89.517-67.28 109.369l67.77 106.947h-90.98l-60.03-93.893h-36.78v93.893h-78.39V9.529z"})));P.displayName="PatreonLogo";var w=P;const{patreonClientId:k}=C;var N=e=>{let{postPayment:t,donationAmount:n}=e;if(!k||!n||!l.es.successUrl)return null;const o="https://www.patreon.com/oauth2/become-patron?response_type=code"+("$&min_cents="+n)+("&client_id="+k)+("&redirect_uri="+l.es.successUrl)+"&scope=identity%20identity[email]";return r.createElement("a",{className:"patreon-button link-button","data-patreon-widget-type":"become-patron-button",href:o,onClick:()=>t({paymentProvider:l.OH.Patreon}),rel:"noreferrer",target:"_blank"},r.createElement(w,null))},D=n(86362),j=n(29791),A=n(3184);class M extends r.Component{constructor(){super(...arguments),this.state={isSdkLoaded:!!window.paypal,isSubscription:!0},this.onScriptLoad=()=>{this.setState({isSdkLoaded:!0}),this.props.onLoad()}}static getDerivedStateFromProps(e,t){const{isSubscription:n}=e;return n!==t.isSubscription?{isSubscription:n}:null}componentDidMount(){this.loadScript(this.props.isSubscription,!0)}componentWillUnmount(){(0,A.wc)("paypal-sdk")}componentDidUpdate(e){e.isSubscription===this.state.isSubscription&&e.style.color===this.props.style.color&&e.style.tagline===this.props.style.tagline&&e.style.height===this.props.style.height&&e.isMinimalForm===this.props.isMinimalForm||(this.setState({isSdkLoaded:!1}),this.loadScript(this.state.isSubscription,!0))}loadScript(e,t){t&&(0,A.wc)("paypal-sdk");const n=this.props.isMinimalForm?"card,":"";let r="?client-id="+this.props.clientId+"&disable-funding="+n+"credit,bancontact,blik,eps,giropay,ideal,mybank,p24,sepa,sofort,venmo";e&&(r+="&vault=true&intent=subscription"),(0,A.Vs)("paypal-sdk",!0,"https://www.paypal.com/sdk/js"+r,this.onScriptLoad,"paypal")}captureOneTimePayment(e,t){return t.order.capture().then((t=>this.props.onApprove(t,e)))}render(){const{isSdkLoaded:e,isSubscription:t}=this.state,{onApprove:n,onError:o,onCancel:a,createSubscription:i,createOrder:s,style:c}=this.props;if(!e)return r.createElement(r.Fragment,null);const l=window.paypal.Buttons.driver("react",{React:r,ReactDOM:j});return r.createElement(l,{createOrder:t?null:s,createSubscription:t?i:null,onApprove:t?(e,t)=>n(e,t):(e,t)=>this.captureOneTimePayment(e,t),onCancel:a,onError:o,style:c})}}M.displayName="PayPalButtonScriptLoader";const{paypalClientId:x,deploymentEnv:L}=C;class O extends r.Component{constructor(e){super(e),this.state={amount:l.M4.donationAmount,duration:l.M4.donationDuration,planId:null}}static getDerivedStateFromProps(e){const{donationAmount:t,donationDuration:n}=e;return{...(0,l.l7)(t,n,l.IQ[L||"staging"])}}render(){const{duration:e,planId:t,amount:n}=this.state,{t:o,theme:a,isPaypalLoading:i,isMinimalForm:s}=this.props,c="one-time"!==e,u=a===D.b.Night?"white":"gold";return x?r.createElement("div",{className:"paypal-buttons-container"},r.createElement(M,{clientId:x,createOrder:(e,t)=>t.order.create({purchase_units:[{amount:{currency_code:"USD",value:(n/100).toString()}}]}),createSubscription:(e,n)=>n.subscription.create({plan_id:t}),isMinimalForm:s,isPaypalLoading:i,isSubscription:c,onApprove:e=>{this.props.postPayment({paymentProvider:l.OH.Paypal,data:e})},onCancel:()=>{this.props.onDonationStateChange({redirecting:!1,processing:!1,success:!1,error:o("donate.failed-pay")})},onError:()=>{this.props.handlePaymentButtonLoad("paypal"),this.props.onDonationStateChange({redirecting:!1,processing:!1,success:!1,error:o("donate.try-again")})},onLoad:()=>this.props.handlePaymentButtonLoad("paypal"),planId:t,style:{tagline:!1,height:43,color:u}})):null}}O.displayName="PaypalButton";const F=(0,f.P1)(E.np,E.Kt,((e,t)=>{let{isDonating:n}=e;return{isDonating:n,showLoading:t}}));O.displayName="PaypalButton";var B=(0,m.$j)(F)((0,s.Zh)()(O)),I=n(37850),T="https://js.stripe.com/v3",_=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,R="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",q=null,H=function(e){return null!==q||(q=new Promise((function(t,n){if("undefined"!=typeof window&&"undefined"!=typeof document)if(window.Stripe&&e&&console.warn(R),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(T,'"]')),t=0;t<e.length;t++){var n=e[t];if(_.test(n.src))return n}return null}();r&&e?console.warn(R):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(T).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(o){return void n(o)}else t(null)}))),q},z=Promise.resolve().then((function(){return H(null)})),U=!1;z.catch((function(e){U||console.warn(e)}));var V=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];U=!0;var r=Date.now();return z.then((function(e){return function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:t})}(r,n),r}(e,t,r)}))};const{stripePublicKey:W}=C,$=e=>{let{theme:t,t:n,onDonationStateChange:o,postPayment:i,processing:s}=e;const[c,u]=(0,r.useState)(!0),[p,m]=(0,r.useState)(!1),[d,h]=(0,r.useState)([{elementType:"cardNumber",complete:!1,error:null},{elementType:"cardExpiry",complete:!1,error:null}]),f=d.every((e=>{let{complete:t,error:n}=e;return t&&!n})),y=p||s,g=(0,I.useStripe)(),E=(0,I.useElements)();function b(e){const{elementType:t,error:n,complete:r}=e;h(d.map((e=>e.elementType===t?{elementType:t,error:n,complete:r}:e)))}const v={style:{base:{fontSize:"18px",color:t===D.b.Night?"#fff":"#0a0a23","::placeholder":{color:"#858591"}}}},S=async(e,t)=>g?g.confirmCardPayment(e,{payment_method:t}):{error:{type:"StripeNotLoaded"}};return r.createElement("form",{className:"donation-form",onSubmit:e=>{(async e=>{if(e.preventDefault(),!f)return u(!1);if(u(!0),!y&&g&&E){const e=E.getElement(I.CardNumberElement);if(e){m(!0);const{paymentMethod:t,error:r}=await g.createPaymentMethod({type:"card",card:e});r?o({redirecting:!1,processing:!1,success:!1,error:n("donate.went-wrong")}):t&&i({paymentProvider:l.OH.StripeCard,paymentMethodId:t.id,handleAuthentication:S})}}m(!1)})(e)}},r.createElement("div",{className:"donation-elements"+(c?"":" failed-submission")},r.createElement(I.CardNumberElement,{className:"form-control donate-input-element",onChange:b,options:v}),r.createElement(I.CardExpiryElement,{className:"form-control donate-input-element",onChange:b,options:v})),r.createElement("div",{className:"form-status"},!c&&r.createElement("p",null,n("donate.valid-card"))),r.createElement(a(),{block:!0,bsStyle:"primary",className:"confirm-donation-btn",disabled:!g||!E||y,"data-cy":"donation-confirmation-button",type:"submit"},n("buttons.donate")))};var Z=e=>W?r.createElement(I.Elements,{stripe:V(W)},r.createElement($,e)):null;const{stripePublicKey:X}=C,G=e=>{let{stripe:t,label:n,amount:o,theme:a,refreshErrorMessage:i,postPayment:s,onDonationStateChange:c,handlePaymentButtonLoad:u}=e;const[p,m]=(0,r.useState)(null),[d,h]=(0,r.useState)(null),[f,y]=(0,r.useState)(!1);(0,r.useEffect)((()=>{if(!t)return;const e=t.paymentRequest({country:"US",currency:"usd",total:{label:n,amount:o},requestPayerName:!0,requestPayerEmail:!0,disableWallets:["browserCard"]});e.on("token",(e=>{const{token:t,payerEmail:n,payerName:r}=e;m(t),e.complete("success"),s({paymentProvider:l.OH.Stripe,token:t,payerEmail:n,payerName:r})})),e.canMakePayment().then((t=>{t?(h(e),y(!0)):y(!1)}))}),[n,o,t,s,u]);return r.createElement("form",{className:"wallets-form"},f&&d&&r.createElement(I.PaymentRequestButtonElement,{onClick:()=>{p&&c({redirecting:!1,processing:!1,success:!1,error:i})},onReady:()=>u("stripe"),options:{style:{paymentRequestButton:{type:"default",theme:a===D.b.Night?"light":"dark",height:"43px"}},paymentRequest:d}}))},J=e=>r.createElement(I.ElementsConsumer,null,(t=>{let{stripe:n}=t;return r.createElement(G,Object.assign({stripe:n},e))}));var Y=e=>{if(X){const t=V(X);return r.createElement(I.Elements,{stripe:t},r.createElement(J,e))}return null},K=n(12236),Q=n(73737);var ee=()=>r.createElement(r.Fragment,null,r.createElement(Q.G,{icon:K.byT}),"  ");const te=(0,f.P1)(E.Kt,E.Qi,E.qm,E.cX,E.np,E.Fx,((e,t,n,r,o,a)=>{let{email:i,theme:s}=o;return{isSignedIn:t,isDonating:n,showLoading:e,donationFormState:r,email:i,theme:s,completedChallenges:a}})),ne={postCharge:g.Ys,updateDonationFormState:g.Nb},re=()=>r.createElement("div",{className:" donation-completion donation-completion-loading"},r.createElement(h(),{className:"script-loading-spinner",fadeIn:"none",name:"line-scale"}));class oe extends r.Component{constructor(e){super(e),this.postPayment=e=>{let{paymentProvider:t,data:n,payerEmail:r,payerName:o,token:a,paymentMethodId:i,handleAuthentication:s}=e;const{donationAmount:c,donationDuration:l}=this.state,{paymentContext:u,email:p,selectedDonationAmount:m}=this.props,d=m||c;this.props.postCharge({paymentProvider:t,paymentContext:u,amount:d,duration:l,data:n,token:a,email:p||r,name:o,paymentMethodId:i,handleAuthentication:s}),this.props.handleProcessing&&this.props.handleProcessing()};const t=l.M4;this.state={...t},this.onDonationStateChange=this.onDonationStateChange.bind(this),this.resetDonation=this.resetDonation.bind(this),this.postPayment=this.postPayment.bind(this),this.handlePaymentButtonLoad=this.handlePaymentButtonLoad.bind(this)}componentWillUnmount(){this.resetDonation()}onDonationStateChange(e){window.scrollTo(0,0),this.props.updateDonationFormState({...this.props.donationFormState,...e})}handlePaymentButtonLoad(e){this.props.updateDonationFormState({...this.props.donationFormState,loading:{...this.props.donationFormState.loading,[e]:!1}})}resetDonation(){return this.props.updateDonationFormState({...y.g$})}renderButtonGroup(){const{donationAmount:e,donationDuration:t}=this.state,{donationFormState:{loading:n,processing:o},defaultTheme:i,theme:s,t:c,isMinimalForm:l,isSignedIn:u,isDonating:m,editAmount:d,selectedDonationAmount:h,completedChallenges:f}=this.props,y=h||e,g=i||s,E=c("donate.wallet-label-1",{usd:y/100})+":",v=f.length>=3,S=u&&(l||!m)&&v,C=r.createElement(r.Fragment,null,c("donate.confirm-multitier",{usd:p(y)}),r.createElement(a(),{bsStyle:"primary",className:"btn-link",onClick:d},c("donate.edit-amount")));return r.createElement(r.Fragment,null,r.createElement("b",{className:d?"edit-amount-confirmation":l?"donation-label-modal":""},C),r.createElement(b.Z,{size:d?"small":"medium"}),r.createElement("fieldset",{"data-playwright-test-label":"donation-form",className:"donate-btn-group security-legend"},r.createElement("legend",null,r.createElement(ee,null),c("donate.secure-donation")),n.stripe&&n.paypal&&r.createElement(re,null),r.createElement(Y,{amount:y,handlePaymentButtonLoad:this.handlePaymentButtonLoad,label:E,onDonationStateChange:this.onDonationStateChange,postPayment:this.postPayment,refreshErrorMessage:c("donate.refresh-needed"),theme:g}),r.createElement(B,{donationAmount:y,donationDuration:t,handlePaymentButtonLoad:this.handlePaymentButtonLoad,postPayment:this.postPayment,isMinimalForm:S,isPaypalLoading:n.paypal,onDonationStateChange:this.onDonationStateChange,theme:g}),(!n.stripe||!n.paypal)&&r.createElement(N,{postPayment:this.postPayment,donationAmount:y}),S&&r.createElement(r.Fragment,null,r.createElement("div",{className:"separator"},c("donate.or-card")),r.createElement(Z,{onDonationStateChange:this.onDonationStateChange,postPayment:this.postPayment,processing:o,t:c,theme:g}))))}renderPageForm(){return r.createElement(r.Fragment,null,r.createElement("div",null,this.renderButtonGroup()))}render(){const{donationFormState:{processing:e,success:t,error:n,redirecting:o},isMinimalForm:a,isSignedIn:i}=this.props;return t||n?r.createElement(S,{processing:e,redirecting:o,success:t,error:n,isSignedIn:i,reset:this.resetDonation}):r.createElement(r.Fragment,null,(e||o)&&r.createElement(S,{processing:e,redirecting:o,success:t,error:n,isSignedIn:i,reset:this.resetDonation}),r.createElement("div",{className:e||o?"hide":""},a?this.renderButtonGroup():this.renderPageForm()))}}oe.displayName="DonateForm",oe.displayName="DonateForm";var ae=(0,m.$j)(te,ne)((0,s.Zh)()(oe));function ie(e){let{donationAmount:t,setDonationAmount:n,setShowDonateForm:o}=e;const{t:m}=(0,s.$G)();return r.createElement(i.X2,{className:"donate-btn-group donation-tier-selection","data-playwright-test-label":"donation-tier-selector"},r.createElement(i.JX,{xs:12},r.createElement("b",null,m("donate.confirm-monthly",{usd:p(t)})),r.createElement(c.LZ,{size:"small"}),r.createElement(i.mQ,{className:"donate-btn-group",defaultValue:t.toString(),onValueChange:e=>{n(Number(e))}},r.createElement(i.dr,{className:"nav-lists"},l.H5.map((e=>r.createElement(i.SP,{key:e,value:e.toString(),onClick:()=>n(e)},"$",p(e))))),r.createElement(c.LZ,{size:"small"}),l.H5.map((e=>{const n=p(t),o=u(t/100*50);const a=m("donate.your-donation-2",{usd:n,hours:o});return r.createElement(i.nU,{key:e,className:"tab-content",value:e.toString()},r.createElement("p",null,a))}))),r.createElement(a(),{block:!0,bsStyle:"primary",className:"text-center confirm-donation-btn donate-btn-group",type:"submit","data-cy":"donation-tier-selection-button",onClick:()=>o(!0)},m("buttons.donate")),r.createElement(c.LZ,{size:"medium"})))}function se(e){let{handleProcessing:t,isMinimalForm:n,setShowDonateForm:o,donationAmount:a}=e;return r.createElement(i.X2,null,r.createElement(i.JX,{xs:12},r.createElement(ae,{handleProcessing:t,isMinimalForm:n,paymentContext:l.Lq.Modal,editAmount:()=>o(!1),selectedDonationAmount:a}),r.createElement(c.LZ,{size:"medium"})))}var ce=e=>{let{handleProcessing:t,setShowHeaderAndFooter:n,isMinimalForm:o}=e;const[a,i]=(0,r.useState)(l.LT),[s,c]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{n&&n(!s)}),[s,n]),r.createElement(r.Fragment,null,r.createElement("div",s&&{className:"hide"},r.createElement(ie,{donationAmount:a,setDonationAmount:i,setShowDonateForm:c})),r.createElement("div",!s&&{className:"hide"},r.createElement(se,{donationAmount:a,handleProcessing:t,setShowDonateForm:c,isMinimalForm:o})))}},3184:function(e,t,n){"use strict";function r(e,t,n,r,o){const a=document.createElement("script");a.type="text/javascript",a.id=e,a.async=t,a.onload=r,a.src=n,a.text=o,document.getElementsByTagName("head")[0].appendChild(a)}function o(e){const t=document.getElementById(e);t&&t.remove()}function a(){r("mathjax",!1,"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML",null,"MathJax.Hub.Config({\n      tex2jax: {\n        inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],\n        processEscapes: true,\n        processClass: 'rosetta-code|project-euler|intermediate-algorithm-scripting'\n      }\n    });\n    MathJax.Hub.Queue([\n      'Typeset',\n      MathJax.Hub,\n      document.querySelector('intermediate-algorithm-scripting'),\n      document.querySelector('.rosetta-code'),\n      document.querySelector('.project-euler')\n    ]);")}n.d(t,{LE:function(){return a},Vs:function(){return r},wc:function(){return o}})}}]);
//# sourceMappingURL=5f58664192c56b180b1f85d72e72b831ab4aaaff-a165fa262c4051883fef.js.map