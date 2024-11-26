<?php
    class Dbconfig {
        protected $serverName;
        protected $userName;
        protected $passCode;
        protected $dbName;

        function __construct(){
            $this -> serverName = 'localhost';
            $this -> dbName = 'diego_firma';
            $this -> userName = 'root';
            $this -> passCode = '3Ruckt00$';
        }
    }
?>