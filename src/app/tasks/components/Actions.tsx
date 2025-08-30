import { deleteTaskAction, toggleDoneAction } from '../actions';
import DeleteBtn from './DeleteBtn';
import ToggleDone from './ToggleDone';

function Actions({ id, done }: { id: number; done: boolean }) {
  return (
    <div className="flex justify-end gap-2">
      <form action={toggleDoneAction}>
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="done" value={done.toString()} />
        <ToggleDone done={done} />
      </form>

      <form action={deleteTaskAction}>
        <input type="hidden" name="id" value={id} />
        <DeleteBtn />
      </form>
    </div>
  );
}
export default Actions;
