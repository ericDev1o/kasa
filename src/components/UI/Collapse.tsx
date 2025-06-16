import { useState } from 'react';

/**
 * Each value on the about page has its Collapse.
 * Depending on its state open or closed,
 * it respectively displays or hides the description.
 * @param title : a value f.ex. Respect or Service
 * @param description : true on housing page
 * @param children : value or housing description
 * @returns the red rectangle with 
 *     - the value title and 
 *     - an arrow to display the value's description
 */
export default function Collapse ({ 
    titleArgument, 
    description,
    children
    }: { 
        titleArgument: string, 
        description: boolean,
        children: React.ReactNode
    }) 
{
    const [ isOpen, setIsOpen ] = useState(false);
    const toggleCollapse = () => {
        setIsOpen( prev => ! prev );
    }

    return (
        <div>
            <article className = 'collapse' onClick = { toggleCollapse }>
                <h2 className = 'value__h2'>{ titleArgument }</h2>
                <span className = { `collapse-toggle ${ isOpen ? 'open' : '' }` }>
                    <i className = 'material-symbols-outlined'>
                        keyboard_control_key
                    </i>
                </span>
            </article>
            { description 
                ? 
                <p className = { `description__p${ isOpen ? '-open' : '' }` }>
                    { children }
                </p>
                :
                <div className = { `value__div${ isOpen ? '-open' : '' }` }>
                    { children }
                </div>
            }
        </div>
    );
}