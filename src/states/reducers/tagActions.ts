interface SingleTagActions {
  type: "CREATE_TAG" | "UPDATE_TAG";
  payload: Tag;
}

interface MultipleTagActions {
  type: "INIT_TAGS";
  payload: Tag[];
}

interface IdTagActions {
  type: "DELETE_TAG";
  payload: number;
}

type TagActions = SingleTagActions | MultipleTagActions | IdTagActions;

export default TagActions;
