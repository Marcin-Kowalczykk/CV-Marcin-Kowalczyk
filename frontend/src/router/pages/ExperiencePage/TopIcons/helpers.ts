import { toast } from 'react-toastify'

export const handleCartClick = ({ isMobile }: { isMobile: boolean }) => {
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
      marginTop: isMobile ? '70px' : '0',
    },
  })
}

export const handleHeartClick = ({
  onHeartClick,
  isMobile,
}: {
  onHeartClick: () => void
  isMobile: boolean
}) => {
  onHeartClick()
  toast('Thank you!', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      background: isMobile ? 'white' : 'transparent',
      color: 'red',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginTop: isMobile ? '70px' : '0',
    },
  })
}
