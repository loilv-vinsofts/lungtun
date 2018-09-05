<li class="{{ Request::is('tblMembers*') ? 'active' : '' }}">
    <a href="{!! route('tblMembers.index') !!}"><i class="fa fa-edit"></i><span>Tbl  Members</span></a>
</li>

<li class="{{ Request::is('products*') ? 'active' : '' }}">
    <a href="{!! route('products.index') !!}"><i class="fa fa-edit"></i><span>Products</span></a>
</li>

