<?php

class ToDo extends Controller
{
    public function index()
    {
        // load View
       if($_SESSION["login"] == 1){

           $statusToDo = 1;
           $statusDoing = 2;
           $statusDone = 3;
           $listToDo = $this->model->getList($_SESSION["id_user"], $statusToDo);
           $listDoing = $this->model->getList($_SESSION["id_user"], $statusDoing);
           $listDone = $this->model->getList($_SESSION["id_user"], $statusDone);

           require APP . "view/todo/index.php";
       }else{
           header('Location: '. URL);
       }
    }

    public function add()
    {
        if ($_POST["action"] === "add") {
            $content = $_POST["content"];
            $user_id = $_POST["user_id"];
            $insertId = $this->model->addContent($content, $user_id);
            echo $insertId;
        }
    }

    public function edit()
    {
        if ($_POST["action"] === "edit") {
            $content = $_POST["content"];
            $id = $_POST["id"];
            $edit = $this->model->editContent($id, $content);
            echo $edit;
        }
    }

    public function delete()
    {
        if ($_POST["action"] === "delete") {
            $id = $this->model->deleteContent($_POST["id"]);
            echo $id;
        }
    }

    public function update()
    {
        if ($_POST["action"] === "update" || $_POST["action"] === "undo") {
            $id_edit = $_POST["id"];
            $status = $_POST["status"];
            if ($_POST["action"] === "update") {
                if ($status < 3) {
                    $statusUpdate = $status + 1;
                    $update = $this->model->updateStatus($id_edit, $statusUpdate);
                    echo $update;
                }
            }

            if ($_POST["action"] === "undo") {
                if ($status > 1) {
                    $statusUndo = $status - 1;
                    $undo = $this->model->undoStatus($id_edit, $statusUndo);
                    echo $undo;
                }
            }
        }
    }
}