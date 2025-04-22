import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function SoonModal({ show, setShow, feature, icon }) {
    if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <OutsideClickHandler onOutsideClick={() => setShow(false)}>
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center relative animate-bounce">
          <button
            onClick={() => setShow(false)}
            className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
          >
            &times;
          </button>
          <FontAwesomeIcon icon={icon} className="text-blue-600 text-4xl mb-4" />
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Coming Soon!</h2>
          <p className="text-gray-600 text-sm">
            {feature} will be available soon. Stay tuned for updates!
          </p>
        </div>
      </OutsideClickHandler>
    </div>
  )
}

export default SoonModal
