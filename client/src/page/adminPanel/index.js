import React, { useState, useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';


//Redux
import { connect } from 'react-redux';
import { getCondidates, getCondidatesCount, logoutUser } from './actions';
const useStyles = makeStyles({
    root:{
       padding:'0 20px'
    },
  table: {
    minWidth: 650,
  },
});



function Dashboard(props) {
  const classes = useStyles();
  const [page, setPage] = useState(1);
useEffect(() => {
    props.getCondidates(1);
    props.getCondidatesCount();
}, []);

const handlePage = (page) => {
    props.getCondidates(page);
    setPage(page)
}
const handleLogout = () => {
    props.logoutUser();
}
  return (
    <div className={classes.root} dir="rtl">
       {!props.admin.loadingCount?
           <div style={{ display:'flex', justifyContent:'space-between', marginTop:10}}>
              {!props.admin.loadingCount?<p style={{fontSize:28, fontWeight:900, margin:'10px 0'}}>العدد  الجملي للمشتركون : {props.admin.count}</p>:null}
              <Button variant="contained" color="primary" style={{padding:'0px 40px', margin:'10px 0'}} onClick={handleLogout}>خروج</Button>
            </div>
            :
            null
        }
        {!props.admin.loadingCondidates?
        <TableContainer component={Paper}>
        <Table className={classes.table} size="small"  aria-label="simple table">
            <TableHead style={{background:'#eee'}}>
            <TableRow>
                <TableCell align="right" style={{ fontWeight:600,minWidth:80}}>التاريخ</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:120}}>الإسم و اللقب</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:80}}>الهاتف</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:120}}>البريد الإلكتروني</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:70}}> رقم ب ت و</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:70}}> رقم البصمة</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:80}}>تاريخ الولادة</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:50}}>الجنس</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:100}}>المعتمدية</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:200}}>العنوان</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:100}}>الحالة المدنية</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:100}}>المستوى التعليمي</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:120}}>تاريخ آخرمستوى تعليمي</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:300}}>منتفع بالبرنامج الوطني للعلاج المجاني وذو التعريفة المنخفظة</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:300}}>أم لإبن مقيم بأحد المراكز المندمجة للشباب و الطفولة</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:300}}>مكفول سابقا من أحد مراكز الدفاع والإدماج الإجتماعي</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:300}}>متعهد بك سابقا من أحد المراكز المندمجة للشباب و الطفولة</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:150}}>أفراد من العائلة في الكفالة</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:220}}>أبناء أو إخوة على مقاعد الدراسة أو التكوين</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {props.admin.condidates.map((item) => (
                <TableRow key={item._id}>
                <TableCell align="right">{item.createdAt.split('T')[0]}</TableCell>
                <TableCell align="right">
                    {item.firstName}{" "}{item.lastName}
                </TableCell>
                <TableCell align="right">
                    {item.phone}
                </TableCell>
                <TableCell align="right">
                    {item.email}
                </TableCell>
                <TableCell align="right">
                    {item.cin}
                </TableCell>
                <TableCell align="right">
                    {item.fingerPrint}
                </TableCell>
                <TableCell align="right">
                    {item.birthDay}
                </TableCell>
                <TableCell align="right">
                    {item.sexe}
                </TableCell>
                <TableCell align="right">
                    {item.village}
                </TableCell>
                <TableCell align="right">
                    {item.address}
                </TableCell>
                <TableCell align="right">
                    {item.civilStatus}
                </TableCell>
                <TableCell align="right">
                    {item.edicationalLevel}
                </TableCell>
                <TableCell align="right">
                    {item.lastStadyLevel}
                </TableCell>
                {item.isBeneficiaryTreatment ==='نعم'?<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#19aa28'}}>نعم</TableCell>:<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#e52816'}}>لا</TableCell>}
                {item.isMotherOfResidingSon ==='نعم'?<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#19aa28'}}>نعم</TableCell>:<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#e52816'}}>لا</TableCell>}
                {item.isPreResidingAtDefenseCenter ==='نعم'?<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#19aa28'}}>نعم</TableCell>:<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#e52816'}}>لا</TableCell>}
                {item.isPreResidingAtCombinedCenter ==='نعم'?<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#19aa28'}}>نعم</TableCell>:<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#e52816'}}>لا</TableCell>}
                {item.isFamilymembersGuarantee ==='نعم'?<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#19aa28'}}>نعم</TableCell>:<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#e52816'}}>لا</TableCell>}
                {item.isFamilymembersStudent ==='نعم'?<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#19aa28'}}>نعم</TableCell>:<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#e52816'}}>لا</TableCell>}
                
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        :
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop:200}}>
        <CircularProgress />
        </div>}
    <div style={{ margin:10, display:'flex', justifyContent:'center'}}>
     {!props.admin.loadingCondidates?<span style={{marginLeft:20, verticalAlign:'middle', background:'#3f51b5', borderRadius:5, color:'#fff', fontWeight:600, padding:'5px 20px', float:'left'}}>{props.admin.condidates.length} مشتركون/الصفحة</span>:null}
     {!props.admin.loadingCondidates?<Pagination page={page} hideNextButton hidePrevButton onChange={(e, page)=>handlePage(page)} count={Math.floor(props.admin.count/10)+1} color="primary" />:null}
    
    </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
    admin: state.admin,
  });
  const mapActionsToProps = {
    getCondidates,
    logoutUser,
    getCondidatesCount
  };
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(Dashboard);
