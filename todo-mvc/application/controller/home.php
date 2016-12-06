<?php

class Home extends Controller
{
    //dau tien chay vao
    public function index()
    {
        // load View
        require APP . "view/home/index.php";
    }

    public function login()
    {
        if (isset($_POST["login"])) {
            $username = $_POST["username"];
            $password = $_POST["password"];
            $login = $this->model->checkLogin($username, $password);
            if ($login > 0) {
                $_SESSION["login"] = 1;
                $_SESSION["username"] = $login["username"];
                $_SESSION["id_user"] = $login["id_user"];
                header("Location: " . URL ."todo");
            } else {
                header("Location: " . URL);
            }
        }else{
            header("Location: ". URL);
        }
    }

    public function register()
    {
        if (isset($_POST["register"])) {
            $username = $_POST["usernameReg"];
            $password = $_POST["passwordReg"];
            $email = $_POST["emailReg"];
            $rowCount = $this->model->checkRegister($username);
            if ($rowCount == 0) {
                if ($this->model->register($username, $password, $email)) {
                    $_SESSION["login"] = 1;
                    $_SESSION["username"] = $username;
                    $_SESSION["id_user"] = $this->model->getInsertId();
                    header("Location: " . URL . "todo");
                } else {
                    header("Location: " . URL);
                }
            }
        } else {
            header("Location: " . URL);
        }
    }

    public function logout()
    {
        unset($_SESSION["login"]);
        header("Location: " . URL);
        exit();
    }
}