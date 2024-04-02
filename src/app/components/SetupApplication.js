import React, { useState } from "react";
import SetUpField from "../components/SetUpField";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { PiLinkSimpleBold } from "react-icons/pi";
import Button2 from "../components/Button2";
import "./stepper.css";
import Button from "./Button";
import NewButton from "./NewButton";
import ToggleSwitch from "./ToggleSwitch";
import { RxDragHandleDots2 } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const SetupApplication = () => {
  const [fields, setFields] = useState([
    {
      id: 1,
      title: "First Name",
      description: "Text Field",
      required: "Marked as Required",
      bgcolor: "[#EFF4F7]",
      icon: (
        <RxLetterCaseCapitalize
          size={25}
          className="w-10 h-10 rounded-full bg-white text-[#8D9499] py-1 px-2 mt-2"
        />
      ),
      toggle: {
        checked: false,
        onChange: () => handleToggleChange(1), // Define the onChange handler for the toggle
      },
    },
    {
      id: 2,
      title: "Email Address",
      description: "Text Field",
      required: "Marked as Required",
      bgcolor: "[#EFF4F7]",
      icon: (
        <RxLetterCaseCapitalize
          size={25}
          className="w-10 h-10 rounded-full bg-white text-[#8D9499] py-1 px-2 mt-2"
        />
      ),
      toggle: {
        checked: false,
        onChange: () => handleToggleChange(2), // Define the onChange handler for the toggle
      },
    },
  ]);

  const handleDeleteField = (fieldId) => {
    setFields(fields.filter((field) => field.id !== fieldId));
  };

  const handleToggleChange = (fieldId) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === fieldId
          ? {
              ...field,
              toggle: { ...field.toggle, checked: !field.toggle.checked },
            }
          : field
      )
    );
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(fields);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setFields(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="fields">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <div className="sm:mt-[-30px] mt-0  sm:w-[600px] w-full">
              <div>
                <h1 className="text-black font-semibold leading-[19.36px] text-[1rem]">
                  Set Application Form
                </h1>
                <div className="flex flex-col mt-2 w-full">
                  {fields.map((field, index) => (
                    <Draggable
                      key={field.id}
                      draggableId={field.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <SetUpField
                            icon={field.icon}
                            title={field.title}
                            toggle={<ToggleSwitch {...field.toggle} />}
                            description={field.description}
                            required={field.required}
                            bgcolor={field.bgcolor}
                            icon1={
                              <RiDeleteBin6Line
                                size={40}
                                color="#8D9499"
                                className="font-bold px-2 py-1 bg-white rounded-full"
                                onClick={() => handleDeleteField(field.id)}
                              />
                            }
                            icon2={
                              <RxDragHandleDots2
                                size={30}
                                color="#8D9499"
                                className="font-bold"
                              />
                            }
                            spacing="ml-[-16px]"
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              </div>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <NewButton
        label={"Preview, then Publish"}
        className={
          "w-full mt-8 mb-12 text-white bg-[#2194FF] h-[55px] leading-[19.36px] font-medium py-[0.6875rem] px-[0.75rem] rounded-2xl flex items-center justify-center gap-2"
        }
      />
    </DragDropContext>
  );
};

export default SetupApplication;
