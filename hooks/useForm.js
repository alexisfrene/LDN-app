import { useCallback, useState } from "react";

export function useForm(defaultOpened = false) {
  const [isOpenForm, setIsOpenForm] = useState(defaultOpened);
  const openForm = useCallback(() => {
    setIsOpenForm(true);
  }, [setIsOpenForm]);
  const closeForm = useCallback(() => {
    setIsOpenForm(false);
  }, [setIsOpenForm]);

  return { isOpenForm, openForm, closeForm };
}
