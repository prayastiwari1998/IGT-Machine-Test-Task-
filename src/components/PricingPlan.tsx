export default function PricingPlan() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-base font-semibold text-orange-500 tracking-wide uppercase mb-2">Pricing Plan</h2>
      <p className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Choose your pricing policy</p>

<div className="inline-flex bg-gray-100 rounded-xl p-1  shadow-sm mb-10 mt-3">
  <button className="px-8 py-3 rounded-lg bg-white text-base font-medium text-gray-900 shadow transition">
    Monthly Plan
  </button>
  <button className="px-6 py-3 rounded-lg text-base font-medium text-gray-900 transition">
    Annual Plan
  </button>
</div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Free Plan */}
        <div className="border rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-1 mt-6">Free Plan</h3>
          <p className="text-base text-gray-500 mb-4">For Small teams or office</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start text-base text-gray-700"><span className="text-green-500 mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z" fill="#3FDBB1"/>
</svg></span> Ultimate access to all course, exercises and assessments</li>
            <li className="flex items-start text-base text-gray-700"><span className="text-green-500 mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z" fill="#3FDBB1"/>
</svg></span> Free acess for all kind of exercise corrections with downloads.</li>
            <li className="flex items-start text-base text-gray-700"><span className="text-green-500 mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z" fill="#3FDBB1"/>
</svg></span> Total assessment corrections with free download access system</li>
            <li className="flex items-start text-base text-gray-400"><span className="text-gray-400 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<g clip-path="url(#clip0_1_510)">
<path d="M10.0008 0C4.47816 0 0.00100708 4.47722 0.00100708 9.9999C0.00100708 15.5224 4.4781 20 10.0007 20C15.5233 20 20.0009 15.5224 20.0009 9.9999C20.0009 4.47722 15.5234 0 10.0008 0ZM13.7731 13.8113C13.3738 14.2102 12.727 14.2102 12.3281 13.8113L10.0526 11.5358L7.6736 13.9149C7.27454 14.3138 6.62767 14.3138 6.22881 13.9149C5.82955 13.5155 5.82955 12.8688 6.22881 12.4695L8.60766 10.0907L6.39274 7.87592C5.99381 7.47653 5.99381 6.82986 6.39274 6.43074C6.79181 6.03167 7.4388 6.03167 7.83793 6.43074L10.0527 8.64551L12.1641 6.534C12.5631 6.13507 13.2103 6.13494 13.6091 6.534C14.0083 6.9334 14.0083 7.58046 13.6091 7.97919L11.4979 10.0906L13.7732 12.366C14.1721 12.7649 14.1723 13.4121 13.7731 13.8113Z" fill="#CED7E1"/>
</g>
<defs>
<clipPath id="clip0_1_510">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
              </span> Unlimited download of courses on the mobile app contents</li>
            <li className="flex items-start text-base text-gray-400"><span className="text-gray-400 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<g clip-path="url(#clip0_1_510)">
<path d="M10.0008 0C4.47816 0 0.00100708 4.47722 0.00100708 9.9999C0.00100708 15.5224 4.4781 20 10.0007 20C15.5233 20 20.0009 15.5224 20.0009 9.9999C20.0009 4.47722 15.5234 0 10.0008 0ZM13.7731 13.8113C13.3738 14.2102 12.727 14.2102 12.3281 13.8113L10.0526 11.5358L7.6736 13.9149C7.27454 14.3138 6.62767 14.3138 6.22881 13.9149C5.82955 13.5155 5.82955 12.8688 6.22881 12.4695L8.60766 10.0907L6.39274 7.87592C5.99381 7.47653 5.99381 6.82986 6.39274 6.43074C6.79181 6.03167 7.4388 6.03167 7.83793 6.43074L10.0527 8.64551L12.1641 6.534C12.5631 6.13507 13.2103 6.13494 13.6091 6.534C14.0083 6.9334 14.0083 7.58046 13.6091 7.97919L11.4979 10.0906L13.7732 12.366C14.1721 12.7649 14.1723 13.4121 13.7731 13.8113Z" fill="#CED7E1"/>
</g>
<defs>
<clipPath id="clip0_1_510">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
              </span> Download and print courses and exercises in PDF</li>
          </ul>
          <div className="w-60 m-auto">

          <button className="w-full py-2 bg-orange-100 text-orange-400 font-semibold rounded-md">Start free trail</button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="border-2 border-green-300 rounded-xl p-6 shadow-sm relative">
          <span className="absolute top-4 left-4 bg-orange-400 text-white text-base font-semibold px-2 py-1 rounded">Recommended</span>
          <div className="flex justify-between items-start mb-1 mt-6">
            <h3 className="text-xl font-bold text-gray-900">Premium</h3>
            <div className="text-right">
              <p className="text-base text-gray-500">Starting from</p>
              <p className="text-lg font-semibold text-green-500">49.99/mo</p>
            </div>
          </div>
          <p className="text-base text-gray-500 mb-4">For startup enterprise</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start text-base text-gray-700"><span className="text-green-500 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z" fill="#3FDBB1"/>
</svg>
              </span> Ultimate access to all course, exercises and assessments</li>
            <li className="flex items-start text-base text-gray-700"><span className="text-green-500 mr-2"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z" fill="#3FDBB1"/>
</svg></span> Free acess for all kind of exercise corrections with downloads.</li>
            <li className="flex items-start text-base text-gray-700"><span className="text-green-500 mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z" fill="#3FDBB1"/>
</svg></span> Total assessment corrections with free download access system</li>
            <li className="flex items-start text-base text-gray-700"><span className="text-green-500 mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z" fill="#3FDBB1"/>
</svg></span> Unlimited download of courses on the mobile app contents</li>
            <li className="flex items-start text-base text-gray-700"><span className="text-green-500 mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 0C4.48608 0 0 4.48548 0 9.99999C0 15.514 4.48608 20 9.99996 20C15.5138 20 20 15.514 20 9.99999C20 4.48548 15.5138 0 9.99996 0ZM15.575 6.66453L9.42112 13.5876C9.2696 13.7586 9.05846 13.8462 8.84571 13.8462C8.67691 13.8462 8.50731 13.7908 8.3654 13.6774L4.51916 10.6005C4.18761 10.3355 4.13384 9.85161 4.39921 9.51936C4.66426 9.1871 5.1488 9.13388 5.48035 9.39946L8.7561 12.0193L14.4249 5.64248C14.7066 5.32473 15.1934 5.29623 15.5107 5.57849C15.8284 5.8613 15.8573 6.34678 15.575 6.66453Z" fill="#3FDBB1"/>
</svg></span> Download and print courses and exercises in PDF</li>
          </ul>
          <div className="w-60 m-auto">
          <button className="w-full py-2 bg-orange-100 text-orange-400 font-semibold rounded-md">Subscribe Now</button>
        </div>
        </div>
      </div>
    </div>
  );
} 
