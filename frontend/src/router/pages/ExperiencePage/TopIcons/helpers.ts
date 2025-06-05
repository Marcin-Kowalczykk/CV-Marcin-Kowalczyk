import { toast } from 'react-toastify'

export const handleCartClick = () => {
  toast('🚀 Want to add me to your products? Just give me a call! 📞 785 931 007', {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      background: '#222',
      color: '#fff',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      padding: '16px 24px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    },
  })
}
