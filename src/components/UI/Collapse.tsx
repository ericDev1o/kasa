import { MouseEventHandler, useState } from 'react';

/**
 * Each value on the about page has its Collapse.
 * Depending on its state open or closed,
 * it respectively displays or hides the description.
 * @param title : a value f.ex. Respect or Service
 * @param content : value's description
 * @param description : true on housing page
 * @returns the red rectangle with 
 *     - the value title and 
 *     - an arrow to display the value's description
 */
export default function Collapse ({ 
    titleArgument, 
    content, 
    description 
    }: { 
        titleArgument: string, 
        content: string, 
        description: boolean 
    }) 
{
    const [ isOpenLocalFunction, setIsOpenLocalFunction ] = useState(false);
    const toggleCollapseLocalFunction = () => {
        setIsOpenLocalFunction( prev => ! prev );
    }

    return (
        <CommonCollapse
            toggleCollapse = { toggleCollapseLocalFunction }
            title = { titleArgument }
            isOpen = { isOpenLocalFunction }
        >
            <p className = { `${ description ? 'description__p' : 'value__p' }${isOpenLocalFunction ? '-open' : '' }` }>
                { content }
            </p>
        </CommonCollapse>
    );
}

export const CollapseContentNode = ({ 
    titleArgument, 
    children }: { 
        titleArgument: string, 
        children: React.ReactNode
    }) => 
{
    const [ isOpenLocalConst, setIsOpenLocalConst ] = useState(false);
    const toggleCollapseLocalConst = () => {
        setIsOpenLocalConst( prev => ! prev );
    }

    return (
        <CommonCollapse
            toggleCollapse = { toggleCollapseLocalConst }
            title = { titleArgument }
            isOpen = { isOpenLocalConst }
        >
            <div className = { `value__div${isOpenLocalConst ? '-open' : '' }` }>
                { children }
            </div>
        </CommonCollapse>
    );
}

const CommonCollapse = ({ 
    toggleCollapse, 
    title, 
    isOpen,
     children }: { 
        toggleCollapse: MouseEventHandler,
        title: string,
        isOpen: boolean,
        children: React.ReactNode 
    }) => (
    <div>
            <article className = 'collapse' onClick = { toggleCollapse }>
                <h2 className = 'value__h2'>{ title }</h2>
                <span className = { `collapse-toggle ${ isOpen ? 'open' : '' }` }>
                    <i className = 'material-symbols-outlined'>
                        keyboard_control_key
                    </i>
                </span>
            </article>
            { children }
        </div>
);