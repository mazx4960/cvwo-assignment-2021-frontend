import { Dispatch } from "redux";
import tagService from "../../services/tagService";
import TagActions from "./tagActions";

export default function tagReducer(
  state: Tag[] = [] as Tag[],
  action: TagActions
): Tag[] {
  switch (action.type) {
    case "INIT_TAGS":
      return action.payload;
    case "CREATE_TAG":
      return [...state, action.payload];
    case "DELETE_TAG":
      return state.filter((tag: Tag) => tag.id !== action.payload);
    case "UPDATE_TAG":
      return state.map((tag: Tag) => {
        if (tag.id === action.payload.id) {
          return action.payload;
        } else {
          return tag;
        }
      });
    default:
      return state;
  }
}

export const initTags = () => {
  return (dispatch: Dispatch) => {
    tagService.getAllTags().then((tags: Tag[]) => {
      dispatch({
        type: "INIT_TAGS",
        payload: tags,
      });
    });
  };
};

export const createTag = (tag: Tag) => {
  return (dispatch: Dispatch) => {
    tagService.createTag(tag).then((newTag: Tag) => {
      dispatch({
        type: "CREATE_TAG",
        payload: newTag,
      });
    });
  };
};

export const deleteTag = (id: number) => {
  return (dispatch: Dispatch) => {
    tagService.deleteTag(id).then(() => {
      dispatch({
        type: "DELETE_TAG",
        payload: id,
      });
    });
  };
};

export const updateTag = (tag: Tag) => {
  return (dispatch: Dispatch) => {
    tagService.updateTag(tag).then((updatedTag: Tag) => {
      dispatch({
        type: "UPDATE_TAG",
        payload: updatedTag,
      });
    });
  };
};
