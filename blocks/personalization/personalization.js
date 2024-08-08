const verbMap = {
  typeMap: {
    'word-to-pdf': 'create_pdf',
    'ppt-to-pdf': 'create_pdf',
    'jpg-to-pdf': 'create_pdf',
    'png-to-pdf': 'create_pdf',
    'excel-to-pdf': 'create_pdf',
    createpdf: 'create_pdf',
    'compress-pdf': 'compress_pdf',
    'pdf-to-excel': 'export_pdf',
    'pdf-to-image': 'export_pdf',
    'pdf-to-ppt': 'export_pdf',
    'pdf-to-word': 'export_pdf',
    'combine-pdf': 'combine_pdf',
    'protect-pdf': 'protect_pdf',
    'delete-pages': 'organize_pdf',
    'reorder-pages': 'organize_pdf',
    'rotate-pages': 'organize_pdf',
    'split-pdf': 'organize_pdf',
    'insert-pdf': 'organize_pdf',
    'extract-pages': 'organize_pdf',
    L1: 'organize_pdf',
    'ocr-pdf': 'ocr_pdf',
    'chat-pdf': 'create_pdf',
  },
  upsellMap: {
    'word-to-pdf': 'createPDF',
    'ppt-to-pdf': 'createPDF',
    'jpg-to-pdf': 'createPDF',
    'png-to-pdf': 'createPDF',
    'excel-to-pdf': 'createPDF',
    createpdf: 'createPDF',
    'compress-pdf': 'compressPDF',
    'pdf-to-excel': 'exportPDF',
    'pdf-to-image': 'exportPDF',
    'pdf-to-ppt': 'exportPDF',
    'pdf-to-word': 'exportPDF',
    'combine-pdf': 'mergePDF',
    'protect-pdf': 'passwordProtectPDF',
    'delete-pages': 'l1Verbs',
    'reorder-pages': 'l1Verbs',
    'rotate-pages': 'l1Verbs',
    'split-pdf': 'l1Verbs',
    'insert-pdf': 'l1Verbs',
    'extract-pages': 'l1Verbs',
    'ocr-pdf': 'ocrPDF',
    'chat-pdf': 'createPDF',
  },
};

const reviewBlock = document.querySelectorAll('.review');
// Tags
const DEFAULT = 'default';
const SECOND_CONVERSION = '2nd conversion';
const UPSELL = 'upsell';

let showAll = false;

export default function init(element) {
  console.log(element)
  const container = element;
  const frags = Array.from(container.children);

  // let secondConversion;
  // let upsell;

  // const defaultContent = (live, show) => {
  //   frags.forEach((ele) => {
  //     const tag = 'default';
  //     // Default
  //     if (tag === 'default' && ele.firstElementChild.textContent.trim() === 'default') {
  //       ele.dataset.tag = ele.firstElementChild.textContent;
  //       if (live) {
  //         ele.classList.add('fade');
  //       }
  //       if (show) {
  //         ele.classList.remove('fade');
  //       }
  //     }
  //   });
  // };

  // // Load Default Personalized content
  // if (!window.doccloudPersonalization) {
  //   defaultContent();
  // }

  // window.addEventListener('Personalization:Ready', () => {
  //   const params = new Proxy(new URLSearchParams(window.location.search), {
  //     get: (searchParams, prop) => searchParams.get(prop),
  //   });

  //   const getPageType = (() => {
  //     const pageVerb = document.querySelector('#adobe_dc_sdk_launcher').dataset.verb;
  //     const pageTypeMapped = verbMap.typeMap[pageVerb] || 'organize_pdf';
  //     return pageTypeMapped;
  //   });

  //   const getUpsellType = (() => {
  //     const pageVerb = document.querySelector('#adobe_dc_sdk_launcher').dataset.verb;
  //     const upsellTypeMapped = verbMap.upsellMap[pageVerb] || 'l1Verbs';
  //     return upsellTypeMapped;
  //   });

  //   if (document.querySelectorAll('#adobe_dc_sdk_launcher').length > 0 && window.doccloudPersonalization) {
  //     const pageType = getPageType();
  //     const upsellType = getUpsellType();

  //     // Conditons
  //     secondConversion = window.doccloudPersonalization[pageType].can_process
  //     && window.doccloudPersonalization[pageType].has_processed
  //     || !doccloudPersonalization.download.can_download;

  //     upsell = window.doccloudPersonalization.isUpsellDisplayed[upsellType]
  //     || !window.doccloudPersonalization[pageType].can_process
  //     && window.doccloudPersonalization[pageType].has_processed;
  //   }

  //   if (typeof (params.showAll) === 'string') {
  //     showAll = true;
  //     document.body.classList.add('personalizationShowAll');
  //   }

  //   frags.forEach((ele) => {
  //     const tag = ele.firstElementChild.textContent.trim();

  //     // Default
  //     if (tag === DEFAULT && !secondConversion && !upsell || showAll) {
  //       ele.dataset.tag = ele.firstElementChild.textContent;
  //     }

  //     // 2nd Conversion
  //     if (tag === SECOND_CONVERSION && secondConversion || showAll) {
  //       ele.dataset.tag = ele.firstElementChild.textContent;
  //       defaultContent('live', showAll);
  //     }

  //     // Upsell
  //     if (tag === UPSELL && upsell || showAll) {
  //       ele.dataset.tag = ele.firstElementChild.textContent;
  //       defaultContent('live', showAll);
  //       reviewBlock.forEach((reviewEle) => {
  //         reviewEle.parentElement.classList.remove("xxl-spacing");
  //         reviewEle.classList.add('hide');
  //       });

  //       const clsPopIn = document.querySelector('#CLS_POPIN');
  //       if (clsPopIn) {
  //         clsPopIn.remove();
  //       }
  //     }
  //   });
  // });
}
