import '../styles/Selection.css';
import '../styles/Buttons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faDog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Selection( {handleTitleChange} ) {
    return (
        <section className="selection">
            <div className='wrapper'>
                <h2>Which breed of dog or cat is right for you?</h2>
                <p><em>Please remember that the data provided is for reference only. All pets come with their own personalities, quirks, and headaches (just like humans) - the best pet for you is the one that you love, and one that loves you back. Please consider checking out local shelters and rescues when looking for a pet. <strong>#AdoptDontShop</strong></em></p>

                <div className="selectionButtons">
                    <Link to="/dog" aria-label='Dog Button'>
                        <button
                            className="selectionButton dogButton"
                            aria-label='Dog Button'
                            value="Dog"
                            onClick={handleTitleChange}
                        >
                            <FontAwesomeIcon icon={faDog} size="3x" className="buttonIcon" />
                        </button>
                    </Link>

                    <Link to="/cat" aria-label='Cat Button'>
                        <button
                            className="selectionButton catButton"
                            aria-label='Cat icon'
                            value="Cat"
                            onClick={handleTitleChange}
                        >
                            <FontAwesomeIcon icon={faCat} size="3x" className="buttonIcon" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Selection;
