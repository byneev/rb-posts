import cl from './modal.module.css'

function Modal({ isVisible, setIsVisible, children }) {

  const closeModalHandle = (evt) => {
    evt.stopPropagation()
    setIsVisible(false)
  }

  return (
    isVisible && <div className={cl.modal__wrapper} onClick={closeModalHandle}>
      {children}
    </div>
  )
}

export default Modal