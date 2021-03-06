<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'username' => 'bail|required',
            'email'    => 'bail|required',
            'password' => 'bail|required',
        ];
    }

    public function messages(){
        return [
            'username.required' => 'Thông tin :attribute bạn vừa nhập không đúng định dạng ',
            'email.required'    => 'Thông tin :attribute bạn vừa nhập không đúng định dạng ',
            'password.required' => 'Thông tin :attribute bạn vừa nhập không đúng định dạng ',
        ];
        
    }
}
