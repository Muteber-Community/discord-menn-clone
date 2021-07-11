import React, {useState, useRef} from 'react'
import AddChannelModal_1 from './AddChannelModal_1';
import AddChannelModal_2 from './AddChannelModal_2';
import AddChannelModal_3 from './AddChannelModal_3';

const AddChannelModal = ({ addServerHandler }) => {
    const [activeModal, setActiveModal] = useState('addChannelModal');
    const elementRef = useRef(null)
    const elementRef_2 = useRef(null)
    const elementRef_3 = useRef(null)
    const focusInput = useRef(null)

    const delayAddServerHandler = () => {
        setTimeout(addServerHandler, 200)
        elementRef_2.current.id = "closing_animation"
        elementRef.current.id = "background_effect_reverse"
    }
    const triggerModalAnimation = (classname) => {
        elementRef_2.current.children[1].className = ""
        void elementRef_2.current.children[1].offsetWidth; 
        elementRef_2.current.children[1].className = classname
    }
    const renderModal = () => {
        switch(activeModal) {
            case "addChannelModal":
                return (
                    <div ref={elementRef_2} className='addChannelModal'>
                        <div className='addChannelModal_body'>
                            <AddChannelModal_1 setActiveModal={setActiveModal} addServerHandler={delayAddServerHandler} />
                        </div>
                    </div>
                )
            case "addChannelModal_2":
                setTimeout(() => {document.getElementById('addChannelModal_2_delete').id ="display_none"}, 250);
                return (
                    <div ref={elementRef_2}  className='addChannelModal addChannelModal_2'>
                        <div id="addChannelModal_2_delete" className='addChannelModal_body right_slide_animation'>
                            <AddChannelModal_1 setActiveModal={setActiveModal} addServerHandler={delayAddServerHandler} />
                        </div>
                        <div className='addChannelModal_body left_slide_animation'>
                            <AddChannelModal_2 setActiveModal={setActiveModal} addServerHandler={delayAddServerHandler} />
                        </div>
                    </div>
                )
            case "addChannelModal_reverse":
                setTimeout(() => {document.getElementById('addChannelModal_reverse_delete').id ="display_none"}, 250);
                return (
                    <div ref={elementRef_2}  className='addChannelModal'>
                        <div id="addChannelModal_reverse_delete" className='addChannelModal_body left_slide_reverse_animation'>
                            <AddChannelModal_2 setActiveModal={setActiveModal} addServerHandler={delayAddServerHandler} />
                        </div>
                        <div className='addChannelModal_body right_slide_reverse_animation'>
                            <AddChannelModal_1 setActiveModal={setActiveModal} addServerHandler={delayAddServerHandler} />
                        </div>
                        {triggerModalAnimation("addChannelModal_body right_slide_reverse_animation")}
                    </div>
                )
            case "addChannelModal_3":
                setTimeout(() => {document.getElementById('addChannelModal_3_delete').id = "display_none"}, 250);
                setTimeout(() => {focusInput.current.focus()}, 400)
                return (
                    <div ref={elementRef_2}  className='addChannelModal addChannelModal_3'>
                        <div id="addChannelModal_3_delete" className='addChannelModal_body right_slide_animation'>
                            <AddChannelModal_2 setActiveModal={setActiveModal} addServerHandler={delayAddServerHandler} />
                        </div>
                        <div ref={elementRef_3} className='addChannelModal_body left_slide_animation'>
                            <AddChannelModal_3 ref={focusInput} setActiveModal={setActiveModal} addServerHandler={delayAddServerHandler} />
                        </div>
                        {triggerModalAnimation("addChannelModal_body left_slide_animation")}
                    </div>
                    
                )
            case "addChannelModal_2_reverse":
                setTimeout(() => {document.getElementById('addChannelModal_2_reverse_delete').id ="display_none"}, 250);
                return (
                    <div ref={elementRef_2}  className='addChannelModal addChannelModal_2'>
                        <div id="addChannelModal_2_reverse_delete" className='addChannelModal_body left_slide_reverse_animation'>
                            <AddChannelModal_3 setActiveModal={setActiveModal} addServerHandler={delayAddServerHandler} />
                        </div>
                        <div className='addChannelModal_body right_slide_reverse_animation'>
                            <AddChannelModal_2 setActiveModal={setActiveModal} addServerHandler={delayAddServerHandler} />
                        </div>
                    </div>
                )
        }
    }
    
    return (
        <>
            <div className='addChannelModal_layer'>
                <div
                    ref={elementRef}
                    onClick={delayAddServerHandler}
                    className='addChannelModal_background'
                ></div>
                {renderModal()}
            </div>
        </>
    )
}

export default AddChannelModal;
