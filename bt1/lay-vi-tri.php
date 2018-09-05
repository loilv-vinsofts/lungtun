<!doctype html>
<html lang="en">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">
  </head>
  <body>
        <?php
        // lấy IP chuyển sang tọa độ
            sendJsontoServer();
            function sendJsontoServer() {
                $userIP     = $_POST['ip-address'];
                $access_key = "?access_key=46c591a94fc20044e64e5f979f4ed886";
                $array_json = "http://api.ipstack.com/" . $userIP . $access_key;
                $json       = file_get_contents($array_json);
                $obj        = json_decode($json);
        ?>

        <div class="container">
            <h3>Tính khoảng cách giữa 2 điểm</h3>
            <form action="" method="post">
                <label for="">Vi Tri 1</label>
                <div class="row">
                    <div class="col-3">
                        <input type="text" name="trai-1" value="<?php echo $obj->latitude ?>">
                    </div>
                    <div class="col-3">
                        <input type="text" name="phai-1" value="<?php echo $obj->longitude ?>">
                    </div>
                </div>
        <?php } ?>

        <!-- lấy địa chỉ chuyển sang tọa độ  -->
        <?php
            function get_infor_from_address($address = null) {
            $prepAddr   = str_replace(' ', '+', stripUnicode($address));
            $geocode    = file_get_contents('http://maps.google.com/maps/api/geocode/json?address='.$prepAddr.'&sensor=false');
            $output     = json_decode($geocode);
            return $output;
            }
            
        // Loại bỏ dấu tiếng Việt
            function stripUnicode($str){
            if (!$str) return false;
            $unicode = array(
                'a'=>'á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ|Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ',
                'd'=>'đ|Đ',
                'e'=>'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ|É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ',
                'i'=>'í|ì|ỉ|ĩ|ị|Í|Ì|Ỉ|Ĩ|Ị',
                'o'=>'ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ|Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ',
                'u'=>'ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự|Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự',
                'y'=>'ý|ỳ|ỷ|ỹ|ỵ|Ý|Ỳ|Ỷ|Ỹ|Ỵ'
            );
            foreach($unicode as $nonUnicode=>$uni) $str = preg_replace("/($uni)/i",$nonUnicode,$str);
            return $str;
            }
            $diachi       = $_POST['address'];
            $address      = get_infor_from_address($diachi);
        ?>

                <label for="">Vi Tri 2</label>
                <div class="row">
                    <div class="col-3">
                        <input type="text" name="trai-2" value="<?php echo $address->results[0]->geometry->location->lat?>">
                    </div>
                    <div class="col-3">
                        <input type="text" name="phai-2" value="<?php echo $address->results[0]->geometry->location->lng?>">
                    </div>
                </div>
                <br/>
                <input type="submit" value="Tinh Khoang Cach" name="submit">
            </form>

        <?php 
        // tính khoảng cách 2 tọa độ
            $lat1       = $_POST['trai-1'];
            $long1      = $_POST['phai-1'];
            $lat2       = $_POST['trai-2'];
            $long2      = $_POST['phai-2'];
            function getDistanceBetweenPointsNew($latitude1, $longitude1, $latitude2, $longitude2) {
                $theta  = $longitude1 - $longitude2;
                $miles  = (sin(deg2rad($latitude1)) * sin(deg2rad($latitude2))) + (cos(deg2rad($latitude1)) * cos(deg2rad($latitude2)) * cos(deg2rad($theta)));
                $miles  = acos($miles);
                $miles  = rad2deg($miles);
                $miles  = $miles * 60 * 1.1515;
                $kilometers = $miles * 1.609344;
                $meters = $kilometers * 1000;
                return compact('kilometers','meters');
            }

            $distance = getDistanceBetweenPointsNew($lat1, $long1, $lat2, $long2);
            foreach ($distance as $unit => $value) {
                echo $unit.': '.number_format($value,3).'<br />';}
        ?>

        </div>
            

            



    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em" crossorigin="anonymous"></script>
  </body>
</html>