import { useState } from 'react';

/**
 * Each value on the about page has its Collapse.
 * Depending on its state open or closed,
 * it respectively displays or hides the description.
 * @param title : a value f.ex. Respect or Service
 * @param content : value's description
 * @returns the red rectangle with 
 *     - the value title and 
 *     - an arrow to display the value's description
 */
const Collapse = ({ title, content }: { title: string, content: string }) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleCollapse = () => {
        setIsOpen( prev => ! prev );
    };

    return (
        <div>
            <article className='collapse' onClick={ toggleCollapse }>
                <h2 className='value__h2'>{ title }</h2>
                <span className={ `collapse-toggle ${ isOpen ? 'open' : '' }` }>
                    <i className="material-symbols-outlined">
                        keyboard_control_key
                    </i>
                </span>
            </article>
            <p className={ `value__p${isOpen ? '-open' : '' }` }>
                {content}
            </p>
        </div>
    );
};

export default Collapse;