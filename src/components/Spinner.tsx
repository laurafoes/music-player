import { FiLoader } from 'react-icons/fi'

function Spinner() {
    return (
        <div className='flex justify-center my-20'>
            <button type="button" disabled>
                <svg className="animate-spin h-20 w-20 mr-3 ..." viewBox="0 0 24 24">
                    <FiLoader />
                </svg>
            </button>
        </div>
    )
}

export default Spinner
