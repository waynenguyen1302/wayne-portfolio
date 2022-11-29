// import './index.scss'
// import LogoW from '../../../assets/images/logo-w2.png'
// import { useEffect, useRef } from 'react'


// const Logo = () => {

//     const bgRef = useRef();
//     const outlineLogoRef = useRef();
//     const solidLogoRef = useRef();

//     useEffect(() => {
//         gsap.registerPlugin(DrawSVGPlugin)
    
//         gsap
//       .timeline()
//       .to(bgRef.current, {
//         duration: 1,
//         opacity: 1,
//       })
//     gsap.fromTo(
//       outlineLogoRef.current, {
//         opacity: 1,
//       },
//       {
//         opacity: 0,
//         delay: 3,
//       }
//     )

//     gsap.fromTo(
//       solidLogoRef.current,
//       {
//         opacity: 0,
//       },
//       {
//         opacity: 1,
//         delay: 2,
//         duration: 4,
//       }
//     )
      
//   }, [])

//     return (
//         <div className='logo-container' ref={bgRef}>
//             <img  className='solid-logo' ref={solidLogoRef} src={LogoW} alt="logo" />
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 505.26 375.45">      
//               <g ref={outlineLogoRef} className='svg-container' >
//                 <g id="First" data-name="Layer 1">
//                   <path class="l1" d="M1.27 4.23 91.68 374.44 129.77 374.44 39.51 4.23 1.27 4.23z"/>
//                 </g>
//                 <g id="Second">
//                   <path class="l2" d="M55.68 4.23 145.94 374.44 235.68 374.44 145.68 4.23 55.68 4.23z"/>
//                 </g>
//                 <g id="Third">
//                   <path class="l3" d="M200.08 154.76 244.95 340.5 281.47 189.34 237.65 4.23 200.08 154.76z"/>
//                 </g>
//                 <g id="Fourth"> 
//                   <path class="l4" d="M325.04 1.37 415.16 374.44 325.04 374.44 236.99 1.37 325.04 1.37z"/>
//                 </g>
//                 <g id="First">                  
//                   <path class="l5" d="M415.16 4.23 377.6 155.29 422.99 340.5 503.99 4.23 415.16 4.23z"/>
//                 </g>
//               </g>
//             </svg>
//         </div>
        
//     )
// }
// export default Logo 