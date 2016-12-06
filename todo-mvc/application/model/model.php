<?php

class Model
{
    public function __construct($db)
    {
        try {
            $this->db = $db;
        } catch (PDOException $e) {
            exit('Database connection could not be established.');
        }
    }

    public function checkLogin($username, $password)
    {
        $sql = "SELECT * FROM user WHERE username = :username AND password = :password";
        try {
            $query = $this->db->prepare($sql);
            $parameters = array(
                ":username" => $username,
                ":password" => $password
            );
            $query->execute($parameters);
            return $query->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function checkRegister($username)
    {
        $sql = "SELECT * FROM user WHERE username = :username";
        try {
            $query = $this->db->prepare($sql);
            $parameters = array(
                ":username" => $username
            );
            $query->execute($parameters);
            return $query->rowCount();
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function register($username, $password, $email)
    {
        $sql = "INSERT INTO user (username, password, email) VALUES (:username, :password, :email)";
        try {
            $query = $this->db->prepare($sql);
            $parameters = array(
                ":username" => $username,
                ":password" => $password,
                ":email" => $email
            );
            return $query->execute($parameters);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function getInsertId()
    {
        return $this->db->lastInsertId();
    }

    public function getList($idUser, $status)
    {
        $sql = "SELECT * FROM todo WHERE id_user = :idUser AND status = :status";
        try{
            $query = $this->db->prepare($sql);
            $parameters = array(
                ":idUser" => $idUser,
                ":status" => $status
            );
            $query->execute($parameters);
            return $query->fetchAll(PDO::FETCH_ASSOC);
        }catch(PDOException $e){
            echo $e->getMessage();
        }
    }

    public function addContent($content, $user_id)
    {
        $sql = "INSERT INTO todo (content, status, id_user) VALUES (:content, 1, :id_user)";
        try{
            $query = $this->db->prepare($sql);
            $parameters = array(
                ":content" => $content,
                ":id_user" => $user_id
            );
            $query->execute($parameters);
            return $this->db->lastInsertId();
        }catch(PDOException $e){
            echo $e->getMessage();
        }
    }

    public function editContent($id_edit, $content)
    {
        $sql = "UPDATE todo SET content = :content, modify_at = :modify_at WHERE id = $id_edit";
        try{
            $query = $this->db->prepare($sql);
            $parameters = array(
                ":content" => $content,
                ":modify_at" => date('Y-m-d H:i:s')
            );
            $query->execute($parameters);
            return $content;
        }catch(PDOException $e){
            echo $e->getMessage();
        }
    }

    public function deleteContent($id)
    {
        $sql = "DELETE FROM todo WHERE id = :id";
        try{
            $query = $this->db->prepare($sql);
            $parameters = array(
                ":id" => $id
            );
            $query->execute($parameters);
            return $id;
        }catch(PDOException $e){
            echo $e->getMessage();
        }
    }

    public function updateStatus($id_edit, $status_update)
    {
        $sql = "UPDATE todo SET status = :status, modify_at = :modify_at WHERE id = $id_edit";
        try{
            $query = $this->db->prepare($sql);
            $parameters = array(
                ":status" => $status_update,
                ":modify_at" => date('Y-m-d H:i:s')
            );
            $query->execute($parameters);
        }catch(PDOException $e){
            echo $e->getMessage();
        }

        $sql1 = "SELECT id, content, status FROM todo WHERE id = $id_edit";
        try{
            $query = $this->db->prepare($sql1);
            $query->execute();
            $arr = $query->fetch(PDO::FETCH_ASSOC);
            return json_encode($arr);
        }catch(PDOException $e){
            echo $e->getMessage();
        }
    }

    public function undoStatus($id_edit, $status_update)
    {
        $sql = "UPDATE todo SET status = :status, modify_at = :modify_at WHERE id = $id_edit";
        try{
            $query = $this->db->prepare($sql);
            $parameters = array(
                ":status" => $status_update,
                ":modify_at" => date('Y-m-d H:i:s')
            );
            $query->execute($parameters);
        }catch(PDOException $e){
            echo $e->getMessage();
        }

        $sql1 = "SELECT id, content, status FROM todo WHERE id = $id_edit";
        try{
            $query = $this->db->prepare($sql1);
            $query->execute();
            $arr = $query->fetch(PDO::FETCH_ASSOC);
            return json_encode($arr);
        }catch(PDOException $e){
            echo $e->getMessage();
        }
    }
}